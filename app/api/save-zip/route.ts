import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import { put } from "@vercel/blob"
import JSZip from "jszip"
import { ObjectId } from "mongodb"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Authentication required" },
        { status: 401 }
      )
    }

    // ⭐ REQUIRED FIX: Blob token for local development & production
    const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN
    if (!BLOB_TOKEN) {
      console.error("❌ Missing BLOB_READ_WRITE_TOKEN")
      return NextResponse.json(
        { error: "Blob token missing. Configure BLOB_READ_WRITE_TOKEN." },
        { status: 500 }
      )
    }

    const { db } = await connectToDatabase()
    const user = await db.collection("users").findOne({
      _id: new ObjectId(session.user.id),
    })

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    const maxSavedZips =
      user.subscriptionPlan === "monthly"
        ? 5
        : user.subscriptionPlan === "yearly"
        ? 15
        : 0

    const savedZipsCount = await db.collection("saved_zips").countDocuments({
      userId: session.user.id,
    })

    if (savedZipsCount >= maxSavedZips) {
      return NextResponse.json(
        {
          error: `Save limit reached. Your plan allows ${maxSavedZips} saved ZIPs.`,
        },
        { status: 403 }
      )
    }

    const { zipName, files } = await request.json()

    // ---- Generate ZIP ----
    const zip = new JSZip()
    for (const file of files) {
      zip.file(file.path, file.content)
    }

    const zipBlob = await zip.generateAsync({ type: "blob" })
    const buffer = Buffer.from(await zipBlob.arrayBuffer())

    // ---- Upload ZIP to Vercel Blob ----
    const blobResult = await put(
      `saved-zips/${session.user.id}/${zipName}.zip`,
      buffer,
      {
        access: "public",
        contentType: "application/zip",
        token: BLOB_TOKEN, // ⭐ CRITICAL FIX
      }
    )

    // Save metadata
    await db.collection("saved_zips").insertOne({
      userId: session.user.id,
      name: zipName,
      blobUrl: blobResult.url,
      fileCount: files.length,
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      message: "ZIP saved successfully",
      url: blobResult.url,
    })
  } catch (error) {
    console.error("Save ZIP error:", error)
    return NextResponse.json(
      { error: "Failed to save ZIP" },
      { status: 500 }
    )
  }
}
