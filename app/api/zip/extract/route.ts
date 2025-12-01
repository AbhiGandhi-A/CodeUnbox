import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import JSZip from "jszip"
import { TIER_LIMITS } from "@/lib/tier-limits"

// 🚀 FIX: Use supported App Router configuration exports to ensure the Node.js runtime
// is used and the route is always dynamically executed. This is the correct mechanism
// to handle resource-intensive tasks like large file processing in the App Router.
export const runtime = 'nodejs' 
export const dynamic = 'force-dynamic' 

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    // Note: Assuming 'free' tier for session-less users, should be 'anonymous' if no session.
    const userTier = session?.user?.subscriptionPlan || "anonymous" 
    const limits = TIER_LIMITS[userTier as keyof typeof TIER_LIMITS]

    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file || !file.name.endsWith(".zip")) {
      return NextResponse.json({ error: "Only .zip files are supported" }, { status: 400 })
    }
    
    // Check file size limit (application logic check)
    // We rely on request.formData() streaming but keep this check for user feedback.
    if (file.size > 25 * 1024 * 1024) { // 25MB limit check inside the application logic
      return NextResponse.json({ error: "File size exceeds 25MB limit." }, { status: 413 })
    }


    const buffer = await file.arrayBuffer()
    const zip = new JSZip()
    await zip.loadAsync(buffer)

    const fileEntries: Array<{ path: string; isDirectory: boolean }> = []
    let fileCount = 0

    zip.forEach((relativePath, zipEntry) => {
      // Exclude hidden files and directories (starting with '.')
      if (!relativePath.startsWith(".") && !relativePath.includes("/.")) {
        fileEntries.push({
          path: relativePath,
          isDirectory: zipEntry.dir,
        })
        if (!zipEntry.dir) fileCount++
      }
    })

    // Check file count limit
    if (fileCount > limits.maxFilesPerZip) {
      return NextResponse.json(
        {
          error: `Exceeded file limit. Your plan allows ${limits.maxFilesPerZip} files. Please upgrade your plan.`,
        },
        { status: 403 },
      )
    }

    // Store session data
    // Use a robust way to generate a unique session ID
    const sessionId = `zip-session-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`
    const { db } = await connectToDatabase()

    const sessionData = {
      sessionId,
      userId: session?.user?.id || null,
      files: new Map<string, string>(),
      fileEntries,
      fileCount,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24 hours
    }

    // Read file contents
    for (const entry of fileEntries) {
      if (!entry.isDirectory) {
        try {
          const zipEntry = zip.file(entry.path)
          if (zipEntry) {
            // Using 'text' if possible for better encoding compatibility
            const content = await zipEntry.async("text")
            sessionData.files.set(entry.path, content)
          }
        } catch (err) {
          console.error(`Failed to read ${entry.path}:`, err)
          // Handle files that cannot be read as text (e.g., binaries) by skipping them or giving an empty string.
          sessionData.files.set(entry.path, "")
        }
      }
    }

    // Store in database
    await db.collection("sessions").insertOne({
      sessionId,
      files: Object.fromEntries(sessionData.files),
      fileEntries,
      fileCount,
      userId: session?.user?.id || null,
      expiresAt: sessionData.expiresAt,
      createdAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      sessionId,
      fileCount,
      files: Object.fromEntries(sessionData.files),
    })
  } catch (error) {
    console.error("ZIP extraction error:", error)
    return NextResponse.json({ error: "Failed to extract ZIP file" }, { status: 500 })
  }
}