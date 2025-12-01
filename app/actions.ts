"use server"

export interface FileNode {
  name: string
  path: string
  type: "file" | "folder"
  children?: FileNode[]
}

export interface FileContent {
  path: string
  content: string
  name: string
}

// Map to store file data in memory (session-based)
const fileStore = new Map<string, Map<string, string>>()

function generateSessionId(): string {
  return Math.random().toString(36).substring(2, 11)
}

export async function extractZip(formData: FormData): Promise<{
  success: boolean
  error?: string
  tree?: FileNode
  fileCount?: number
  sessionId?: string
}> {
  try {
    const file = formData.get("file") as File
    if (!file) {
      return { success: false, error: "No file provided" }
    }

    if (!file.name.endsWith(".zip")) {
      return { success: false, error: "Only .zip files are supported" }
    }

    // Import JSZip dynamically
    const JSZip = (await import("jszip")).default

    const buffer = await file.arrayBuffer()
    const zip = new JSZip()

    try {
      await zip.loadAsync(buffer)
    } catch {
      return { success: false, error: "Failed to extract zip file. File may be corrupted." }
    }

    // Create session for this upload
    const sessionId = generateSessionId()
    const files = new Map<string, string>()
    fileStore.set(sessionId, files)

    // Process all files in zip
    const fileEntries: Array<{ path: string; isDirectory: boolean }> = []

    zip.forEach((relativePath, zipEntry) => {
      // Skip hidden files and common directories
      if (relativePath.startsWith(".")) return
      if (relativePath.includes("/.")) return
      if (relativePath.includes("/node_modules/")) return
      if (relativePath.includes("/.git/")) return
      if (relativePath.includes("/dist/")) return
      if (relativePath.includes("/build/")) return

      fileEntries.push({
        path: relativePath,
        isDirectory: zipEntry.dir,
      })
    })

    // Read file contents
    for (const entry of fileEntries) {
      if (!entry.isDirectory) {
        try {
          const zipEntry = zip.file(entry.path)
          if (zipEntry) {
            const content = await zipEntry.async("string")
            files.set(entry.path, content)
          }
        } catch (err) {
          console.error(`Failed to read ${entry.path}:`, err)
        }
      }
    }

    // Build file tree
    const tree = buildFileTree(fileEntries)
    const fileCount = files.size

    // Clean up old sessions (keep only last 5)
    if (fileStore.size > 5) {
      const keys = Array.from(fileStore.keys())
      const oldestKey = keys[0]
      fileStore.delete(oldestKey)
    }

    return { success: true, tree, fileCount, sessionId }
  } catch (error) {
    console.error("Zip extraction error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

function buildFileTree(fileEntries: Array<{ path: string; isDirectory: boolean }>): FileNode {
  const root: FileNode = {
    name: "root",
    path: ".",
    type: "folder",
    children: [],
  }

  // Build a map of all nodes for easy lookup
  const nodeMap = new Map<string, FileNode>()
  nodeMap.set(".", root)

  // Create all nodes
  for (const entry of fileEntries) {
    const parts = entry.path.split("/").filter((p) => p)

    for (let i = 0; i < parts.length; i++) {
      const fullPath = parts.slice(0, i + 1).join("/")

      if (!nodeMap.has(fullPath)) {
        const name = parts[i]
        const isLast = i === parts.length - 1
        const isDirectory = entry.isDirectory || !isLast

        const node: FileNode = {
          name,
          path: fullPath,
          type: isDirectory ? "folder" : "file",
          ...(isDirectory && { children: [] }),
        }

        nodeMap.set(fullPath, node)
      }
    }
  }

  // Build tree structure
  for (const [path, node] of nodeMap.entries()) {
    if (path === ".") continue

    const parentPath = path.substring(0, path.lastIndexOf("/")) || "."
    const parent = nodeMap.get(parentPath)

    if (parent && parent.type === "folder" && parent.children) {
      parent.children.push(node)
    }
  }

  // Sort children: folders first, then files, both alphabetically
  const sortNode = (node: FileNode) => {
    if (node.children) {
      node.children.sort((a, b) => {
        if (a.type !== b.type) return a.type === "folder" ? -1 : 1
        return a.name.localeCompare(b.name)
      })
      node.children.forEach(sortNode)
    }
  }

  sortNode(root)

  return root
}

export async function readFile(
  filePath: string,
  sessionId: string,
): Promise<{
  success: boolean
  content?: string
  error?: string
}> {
  try {
    const files = fileStore.get(sessionId)
    if (!files) {
      return { success: false, error: "Session expired. Please upload the file again." }
    }

    const content = files.get(filePath)
    if (content === undefined) {
      return { success: false, error: "File not found" }
    }

    // Check content size
    if (content.length > 5 * 1024 * 1024) {
      return {
        success: false,
        error: "File is too large to display (max 5MB)",
      }
    }

    return { success: true, content }
  } catch (error) {
    console.error("File read error:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Could not read file",
    }
  }
}

export async function clearSession(sessionId: string): Promise<{ success: boolean }> {
  try {
    fileStore.delete(sessionId)
    return { success: true }
  } catch {
    return { success: false }
  }
}
