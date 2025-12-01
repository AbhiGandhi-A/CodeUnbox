import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"

/**
 * Generates a unique 4-digit PIN for sharing.
 */
function generatePin(): string {
  // Generate a random 4-digit number (1000 to 9999)
  return Math.floor(1000 + Math.random() * 9000).toString()
}

/**
 * Handles the request to generate a shareable PIN and store the file data.
 */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    // Expecting an array of file objects from the request body.
    const { files } = await request.json()

    if (!files || !Array.isArray(files) || files.length === 0) {
      return NextResponse.json({ error: "No files to share" }, { status: 400 })
    }

    // Sanitize the files array to ensure essential fields are present before saving
    const validFilesToStore = files.map((file: any) => ({
        path: typeof file.path === 'string' ? file.path : 'unknown_path',
        name: typeof file.name === 'string' ? file.name : 'unknown_file',
        // Content must be included here for the download API to work later
        content: typeof file.content === 'string' ? file.content : '', 
    })).filter((file: any) => file.name !== 'unknown_file') // Filter out files that didn't even have a name

    if (validFilesToStore.length === 0) {
        return NextResponse.json({ error: "No valid file data provided for sharing" }, { status: 400 })
    }

    const { db } = await connectToDatabase()
    let pin = ""
    let pinExists = true
    
    // Ensure the generated PIN is unique
    while (pinExists) {
        pin = generatePin()
        // Only consider pins that haven't expired yet
        const existingPin = await db.collection("shared_pins").findOne({ 
            pin, 
            expiresAt: { $gt: new Date() } 
        })
        if (!existingPin) {
            pinExists = false
        }
    }

    // Define expiration 7 days from now
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)

    // Store shared files with PIN
    const result = await db.collection("shared_pins").insertOne({
      pin,
      userId: session.user.id,
      files: validFilesToStore, // Store sanitized file data
      expiresAt: expiresAt, 
      createdAt: new Date(),
    })

    return NextResponse.json({
      success: true,
      pin,
      shareId: result.insertedId,
      expiresAt: expiresAt.toISOString(),
    })
  } catch (error) {
    console.error("Share generation error:", error)
    return NextResponse.json({ error: "Failed to generate share PIN" }, { status: 500 })
  }
}