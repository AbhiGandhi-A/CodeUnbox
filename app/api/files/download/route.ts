import { connectToDatabase } from "@/lib/mongodb"
import { type NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth-config"
import JSZip from "jszip"
// Assuming you have a file at this path with the TIER_LIMITS object
import { TIER_LIMITS } from "@/lib/tier-limits" 
import { ObjectId } from "mongodb"

// Define allowed tiers for validation
type AllowedTiers = "anonymous" | "free" | "monthly" | "yearly"

export async function POST(request: NextRequest) {
  try {
    // Note: getServerSession returns null if not authenticated
    const session = await getServerSession(authOptions)
    
    // Deconstruct body, including the userTier passed from the client
    const body = await request.json()
    const { sessionId, files, downloadType, userTier: clientUserTier } = body
    
    // Determine the user's tier based on client hint or default logic
    const effectiveTier = (TIER_LIMITS as Record<string, any>).hasOwnProperty(clientUserTier)
      ? clientUserTier as AllowedTiers
      : session ? "free" : "anonymous"
      
    // Assuming TIER_LIMITS is structured correctly
    const limits = TIER_LIMITS[effectiveTier as AllowedTiers]

    // --- 1. Basic Data Validation ---
    if (!sessionId || !files || !Array.isArray(files) || files.length === 0) {
        return NextResponse.json({ error: "Missing session ID or files." }, { status: 400 })
    }

    // CRITICAL: Filter out any potential undefined/null values from the files array
    const validFiles = files.filter((f: any): f is string => typeof f === 'string' && f.trim() !== '')

    if (validFiles.length === 0) {
        return NextResponse.json({ error: "No valid files selected for download." }, { status: 400 })
    }

    // --- 2. Tier and Limit Checks ---
    if (downloadType === "zip" && limits && !limits.canDownloadZip) {
      return NextResponse.json(
        {
          error: "Your plan does not allow downloading multiple files as ZIP. Please upgrade.",
        },
        { status: 403 },
      )
    }

    // For free tier, check individual file limit
    if (effectiveTier === "free" && validFiles.length > 10) {
      return NextResponse.json(
        {
          error: `Free plan limited to 10 files per download. You selected ${validFiles.length}. Upgrade to download more.`,
        },
        { status: 403 },
      )
    }

    // --- 3. Database Fetch and Update ---
    const { db } = await connectToDatabase()
    
    // NOTE: sessionId is the unique ID for the session/zip contents
    const sessionData = await db.collection("sessions").findOne({ sessionId })

    if (!sessionData || !sessionData.files) {
      return NextResponse.json({ error: "Session expired or files data missing." }, { status: 404 })
    }

    // Update download count for logged-in users
    if (session?.user?.id) {
        // Assuming session.user.id is the MongoDB _id (stringified)
        try {
          await db.collection("users").updateOne({ _id: new ObjectId(session.user.id) }, { $inc: { totalDownloads: 1 } })
        } catch (updateError) {
          console.error("Failed to update download count:", updateError);
          // Continue execution even if update fails
        }
    }

    // --- 4. File Preparation ---
    let buffer: Buffer
    let fileName: string
    let contentType: string

    if (downloadType === "zip" || validFiles.length > 1) {
      // Create ZIP file
      const zip = new JSZip()
      for (const filePath of validFiles) {
        const content = sessionData.files[filePath]
        if (content) {
          // The file is added to the ZIP with its full path as the name (e.g., folder/file.txt)
          zip.file(filePath, content) 
        } else {
            console.warn(`File path ${filePath} not found in session data.`)
        }
      }
      
      // Generate the ZIP blob and convert it to a Buffer
      const blob = await zip.generateAsync({ type: "nodebuffer" })
      buffer = blob
      fileName = "files.zip"
      contentType = "application/zip"

    } else {
      // Single file download (validFiles.length === 1)
      const filePath = validFiles[0]
      const content = sessionData.files[filePath]
      
      if (!content) {
        return NextResponse.json({ error: `File not found in session: ${filePath}` }, { status: 404 })
      }
      
      // Convert content (string or base64 data) to Buffer
      buffer = Buffer.from(content)
      fileName = filePath.split("/").pop() || "file"
      // Attempt to infer content type based on extension, otherwise default to octet-stream
      const extension = fileName.split('.').pop()?.toLowerCase();
      contentType = extension === 'json' ? 'application/json' : 'application/octet-stream';
    }

    // --- 5. Final Response ---
    // FIX: Convert the Node.js Buffer to a standard ArrayBuffer slice, 
    // and explicitly cast to ArrayBuffer to satisfy NextResponse's type requirements.
    const arrayBuffer = buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.length
    ) as ArrayBuffer; 

    // Return the ArrayBuffer wrapped in a NextResponse
    return new NextResponse(arrayBuffer, {
      headers: {
        "Content-Disposition": `attachment; filename="${fileName}"`,
        "Content-Type": contentType,
        "Content-Length": buffer.length.toString(), 
      },
    })
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json({ error: "Download failed due to server error" }, { status: 500 })
  }
}