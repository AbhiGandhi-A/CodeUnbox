import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import JSZip from "jszip"
import { TIER_LIMITS } from "@/lib/tier-limits"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const userTier = session ? "free" : "anonymous"
    const limits = TIER_LIMITS[userTier]

    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file || !file.name.endsWith(".zip")) {
      return NextResponse.json({ error: "Only .zip files are supported" }, { status: 400 })
    }

    const buffer = await file.arrayBuffer()
    const zip = new JSZip()
    await zip.loadAsync(buffer)

    const fileEntries: Array<{ path: string; isDirectory: boolean }> = []
    let fileCount = 0

    zip.forEach((relativePath, zipEntry) => {
      if (!relativePath.startsWith(".") && !relativePath.includes("/.")) {
        fileEntries.push({
          path: relativePath,
          isDirectory: zipEntry.dir,
        })
        if (!zipEntry.dir) fileCount++
      }
    })

    // Check file limit
    if (fileCount > limits.maxFilesPerZip) {
      return NextResponse.json(
        {
          error: `Exceeded file limit. Your plan allows ${limits.maxFilesPerZip} files. Please upgrade your plan.`,
        },
        { status: 403 },
      )
    }

    // Store session data
    const sessionId = Math.random().toString(36).substring(2, 11)
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
            const content = await zipEntry.async("string")
            sessionData.files.set(entry.path, content)
          }
        } catch (err) {
          console.error(`Failed to read ${entry.path}:`, err)
        }
      }
    }

    // Store in Redis-like session (in production, use Redis)
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
