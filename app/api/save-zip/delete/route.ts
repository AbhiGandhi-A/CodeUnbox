import { NextRequest, NextResponse } from "next/server"
import { connectToDatabase } from "@/lib/mongodb"
import { del } from "@vercel/blob"
import { ObjectId } from "mongodb"

export async function POST(req: NextRequest) {
  try {
    // Requires both the MongoDB document ID (as a string) and the Blob URL
    const { id, url } = await req.json()

    if (!id || !url) {
       return NextResponse.json({ error: "Missing ID or URL" }, { status: 400 })
    }

    // 1. Delete from Vercel Blob Storage
    // The `del` function is asynchronous and handles the actual file removal.
    await del(url)

    // 2. Delete metadata from MongoDB
    const { db } = await connectToDatabase()
    // Use new ObjectId(id) to convert the string ID back to a MongoDB ObjectId
    await db.collection("saved_zips").deleteOne({ _id: new ObjectId(id) })

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error("Delete failed:", e)
    return NextResponse.json({ error: "Failed to delete saved ZIP" }, { status: 500 })
  }
}