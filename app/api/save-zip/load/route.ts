import { NextRequest, NextResponse } from "next/server"
import JSZip from "jszip"

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json()
    if (!url) {
      return NextResponse.json({ error: "Missing URL" }, { status: 400 })
    }

    // Fetch ZIP from Blob Storage
    const blobResponse = await fetch(url)
    const blob = await blobResponse.arrayBuffer()

    const zip = await JSZip.loadAsync(blob)

    const extractedFiles: {
      path: string
      content: string
    }[] = []

    const entries = Object.keys(zip.files)

    for (const filePath of entries) {
      const file = zip.files[filePath]

      if (!file.dir) {
        const content = await file.async("text")
        extractedFiles.push({
          path: filePath,
          content,
        })
      }
    }

    return NextResponse.json({
      success: true,
      files: extractedFiles,
    })
  } catch (err) {
    console.error("Load saved ZIP error:", err)
    return NextResponse.json({ error: "Failed to load ZIP" }, { status: 500 })
  }
}
