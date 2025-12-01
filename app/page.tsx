"use client"

import { useSession } from "next-auth/react"
import { useState, useCallback, useMemo } from "react"
import { TopBar } from "@/components/TopBar"
import { FileTree } from "@/components/FileTree"
import { CodeEditor } from "@/components/CodeEditor"
import { PricingNotice } from "@/components/PricingNotice"
import { ShareModal } from "@/components/ShareModal"
import { AccessSharedFiles } from "@/components/AccessSharedFiles"
import styles from "./page.module.css"
import type { FileNode } from "@/app/actions"


interface SelectedFile {
	path: string
	content: string
}

export default function Home() {
	const { data: session } = useSession()
	const [fileTree, setFileTree] = useState<FileNode | null>(null)
	const [fileCount, setFileCount] = useState(0)
	const [selectedFiles, setSelectedFiles] = useState<SelectedFile[]>([]) // This state holds the file data needed for saving
	const [selectedFilePaths, setSelectedFilePaths] = useState<Set<string>>(new Set())
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [isLoadingFile, setIsLoadingFile] = useState(false)
	const [sessionId, setSessionId] = useState<string>("")
	const [showShareModal, setShowShareModal] = useState(false)
	const [showAccessShared, setShowAccessShared] = useState(false)

	// Determine userTier here for the PricingNotice and other components that need it
	const userTier = session?.user?.subscriptionPlan || "anonymous"
	
	// Tier limits logic remains, used for upload checks (which are commented out but should exist)
	const tierLimits = useMemo(
		() => ({
			anonymous: {
				maxFilesPerZip: 100,
				canDownloadIndividual: false,
				canDownloadZip: false,
			},
			free: {
				maxFilesPerZip: 200,
				canDownloadIndividual: true,
				canDownloadZip: true,
			},
			monthly: {
				maxFilesPerZip: Number.POSITIVE_INFINITY,
				canDownloadIndividual: true,
				canDownloadZip: true,
			},
			yearly: {
				maxFilesPerZip: Number.POSITIVE_INFINITY,
				canDownloadIndividual: true,
				canDownloadZip: true,
			},
		}),
		[],
	)

	/**
	 * Memoized function to retrieve file content and name based on path.
	 * This is required by ShareModal.tsx to send the full file object to the API.
	 */
	const getFileContent = useCallback(
		(path: string) => {
			const file = selectedFiles.find((f) => f.path === path)
			if (file) {
				// We need to extract the name, as the selectedFiles array doesn't explicitly store it
				const name = path.split("/").pop() || "";
				if (name) {
					return { name, content: file.content }
				}
			}
			return null
		},
		[selectedFiles],
	)

// New: Handler for loading files from a saved ZIP history
const handleLoadSavedZip = useCallback((loadedFiles: SelectedFile[]) => {
  // Clear current state
  setSelectedFiles([])
  setSelectedFilePaths(new Set())

  const fileMap: Record<string, string> = {}
  loadedFiles.forEach(f => {
    fileMap[f.path] = f.content
  })

  // Rebuild the file tree
  const tree = buildFileTree(fileMap)

  // Update state with loaded data
  setFileTree(tree)
  setFileCount(loadedFiles.length)
  // IMPORTANT: Set the loaded files as the new content.
  setSelectedFiles(loadedFiles); 

  // Since we load the whole ZIP, we should clear the session ID to start fresh, 
  // or retrieve a new one if necessary for API calls. For simplicity, we clear it here.
  setSessionId(""); 
}, [])


	const handleUpload = useCallback(async (file: File) => {
		setIsLoading(true)
		setError(null)
		setFileTree(null)
		setSelectedFiles([])
		setSelectedFilePaths(new Set())


		try {
			const formData = new FormData()
			formData.append("file", file)

			const result = await fetch("/api/zip/extract", {
				method: "POST",
				body: formData,
			})

			const data = await result.json()

			if (!result.ok) {
				setError(data.error || "Failed to extract zip file")
				return
			}

			// ⭐ FIX: Store ALL extracted file contents for saving later
			const allFilesContent: SelectedFile[] = Object.entries(data.files).map(([path, content]) => ({
				path,
				content: content as string,
			}))
			setSelectedFiles(allFilesContent)
			
			// End of FIX
			
			setFileTree(data.files ? buildFileTree(data.files) : null)
			setFileCount(data.fileCount)
			setSessionId(data.sessionId)
		} catch (err) {
			setError(err instanceof Error ? err.message : "An error occurred")
		} finally {
			setIsLoading(false)
		}
	}, [])

	// NOTE: handleFileSelect is now only responsible for tracking which files are open in the editor.
	// It no longer needs to fetch content if all content is loaded on upload.
	// However, your original implementation fetches file content on select. I'll preserve the fetch logic 
	// but skip adding to `selectedFiles` if it's already present (since it's all loaded on upload now).
	// To avoid redundancy and fix the file count issue, I'll remove the content fetching logic from here
	// and assume `selectedFiles` contains all file content after `handleUpload`.

	const handleFileSelect = useCallback(
		(filePath: string) => {
			const isAlreadySelected = selectedFilePaths.has(filePath)

			if (isAlreadySelected) {
				setSelectedFilePaths((prev) => {
					const next = new Set(prev)
					next.delete(filePath)
					return next
				})
			} else {
				// We assume file content is already in `selectedFiles` from handleUpload.
				// We only update the list of paths for the CodeEditor to display.
				setSelectedFilePaths((prev) => new Set([...prev, filePath]))
			}
		},
		[selectedFilePaths],
	)

	return (
		<div className={styles.container}>
			<TopBar
                fileCount={fileCount}
                onUpload={handleUpload}
                isLoading={isLoading}
                selectedFilePaths={Array.from(selectedFilePaths)}
                sessionId={sessionId}
                onShareClick={() => setShowShareModal(true)}
                onAccessSharedClick={() => setShowAccessShared(true)}
                onLoadSavedZip={handleLoadSavedZip}
                // ⭐ CORRECT: Pass the required 'files' prop from state (now containing ALL content)
                files={selectedFiles} 
            />


			{error && (
				<div className={styles.errorBanner}>
					<span className={styles.errorIcon}>⚠️</span>
					<span className={styles.errorMessage}>{error}</span>
					<button className={styles.errorClose} onClick={() => setError(null)} aria-label="Close error">
						×
					</button>
				</div>
			)}

			{/* PricingNotice still needs the session check */}
			{!session && <PricingNotice />}

			<ShareModal
				isOpen={showShareModal}
				onClose={() => setShowShareModal(false)}
				selectedFilePaths={Array.from(selectedFilePaths)}
				getFileContent={getFileContent} // <-- FIX: Passing the required prop
			/>

			<AccessSharedFiles isOpen={showAccessShared} onClose={() => setShowAccessShared(false)} />

			<div className={styles.mainContent}>
				<aside className={styles.sidebar}>
					{fileTree ? (
						<FileTree tree={fileTree} onFileSelect={handleFileSelect} selectedFiles={selectedFilePaths} />
					) : (
						<div className={styles.empty}>
							<p>Upload a .zip file to explore its contents</p>
						</div>
					)}
				</aside>
				<main className={styles.editor}>
					{/* Pass only the currently *selected* files to the editor */}
					<CodeEditor 
						files={selectedFiles.filter(f => selectedFilePaths.has(f.path))} 
						isLoading={isLoadingFile} 
						sessionId={sessionId} 
						userTier={userTier} 
					/>
				</main>
			</div>
		</div>
	)
}

function buildFileTree(files: Record<string, string>): FileNode {
	const root: FileNode = {
		name: "root",
		path: ".",
		type: "folder",
		children: [],
	}

	const nodeMap = new Map<string, FileNode>()
	nodeMap.set(".", root)

	const paths = Object.keys(files)

	for (const filePath of paths) {
		const parts = filePath.split("/").filter((p) => p)
		for (let i = 0; i < parts.length; i++) {
			const fullPath = parts.slice(0, i + 1).join("/")
			if (!nodeMap.has(fullPath)) {
				const name = parts[i]
				const isLast = i === parts.length - 1
				const isDirectory = !isLast
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

	for (const [path, node] of nodeMap.entries()) {
		if (path === ".") continue
		const parentPath = path.substring(0, path.lastIndexOf("/")) || "."
		const parent = nodeMap.get(parentPath)
		if (parent && parent.type === "folder" && parent.children) {
			parent.children.push(node)
		}
	}


	
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