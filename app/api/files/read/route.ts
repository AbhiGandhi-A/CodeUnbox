import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { filePath, sessionId } = await request.json()

    const { db } = await connectToDatabase()
    const sessionData = await db.collection("sessions").findOne({ sessionId })

    if (!sessionData) {
      return NextResponse.json({ error: "Session expired" }, { status: 404 })
    }

    const content = sessionData.files[filePath]
    if (!content) {
      return NextResponse.json({ error: "File not found" }, { status: 404 })
    }

    if (content.length > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File is too large to display (max 5MB)" }, { status: 413 })
    }

    return NextResponse.json({
      success: true,
      content,
    })
  } catch (error) {
    console.error("File read error:", error)
    return NextResponse.json({ error: "Could not read file" }, { status: 500 })
  }
}
