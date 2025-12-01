import { connectToDatabase } from "@/lib/mongodb"
import { NextResponse, type NextRequest } from "next/server"
import JSZip from "jszip"

/**
 * Dedicated route for downloading files accessed via a shared PIN.
 * It uses the PIN to find the session/shared data and zips the requested file paths.
 * The file contents are assumed to be stored directly in the `shared_pins` collection.
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { pin, files } = body
        
        if (!pin || !files || !Array.isArray(files) || files.length === 0) {
            return NextResponse.json({ error: "Missing PIN or files to download." }, { status: 400 })
        }

        const { db } = await connectToDatabase()
        
        // 1. Find the sharing record using the PIN in the shared_pins collection
        const shareRecord = await db.collection("shared_pins").findOne({ pin })
        
        if (!shareRecord) {
            return NextResponse.json({ error: "Invalid or expired share PIN." }, { status: 404 })
        }

        // Check expiration
        if (shareRecord.expiresAt && new Date() > shareRecord.expiresAt) {
            // Optional: delete expired record
            await db.collection("shared_pins").deleteOne({ pin });
            return NextResponse.json({ error: "Share PIN has expired." }, { status: 410 })
        }

        // 2. The file contents are assumed to be stored directly in `shareRecord.files`
        // Defensive mapping to ensure we only proceed with valid data and handle `shareRecord.files` possibly being null/undefined.
        const filesArray = Array.isArray(shareRecord.files) ? shareRecord.files : [];
        
        // Explicitly define the map type and ensure content is cast to string to satisfy JSZip's overloads
        const fileContentsMap: Map<string, string> = new Map(
            filesArray
                .filter((f: any) => f && typeof f.path === 'string' && typeof f.content === 'string')
                .map((f: any) => [f.path, f.content as string])
        );

        // Filter for only valid string paths
        const validPaths = files.filter((f: any): f is string => typeof f === 'string' && f.trim() !== '')

        if (validPaths.length === 0) {
            return NextResponse.json({ error: "No valid file paths received for download." }, { status: 400 })
        }

        // --- 3. File Preparation (ZIP) ---
        const zip = new JSZip()
        for (const filePath of validPaths) {
            // content is guaranteed to be string or undefined based on fileContentsMap type
            const content = fileContentsMap.get(filePath)
            if (content) {
                // Add the file to the zip. Use the path as the file name in the zip.
                // Explicit cast to string added here to resolve potential TypeScript overload confusion
                zip.file(filePath, content as string) 
            } else {
                console.warn(`Content for path ${filePath} was requested but not found in shareRecord.files`)
            }
        }
        
        // Generate the ZIP buffer
        // Note: Using 'nodebuffer' is required for Node.js environments (like Next.js API routes)
        const buffer = await zip.generateAsync({ type: "nodebuffer" }) as Buffer
        
        const fileName = "shared_files.zip"
        const contentType = "application/zip"

        // --- 4. Final Response (Applying TypeScript ArrayBuffer Fix) ---
        
        // Convert the Node.js Buffer to a standard ArrayBuffer slice for compatibility with NextResponse.
        const arrayBuffer = buffer.buffer.slice(
            buffer.byteOffset,
            buffer.byteOffset + buffer.length
        ) as ArrayBuffer; 

        return new NextResponse(arrayBuffer, {
            headers: {
                "Content-Disposition": `attachment; filename="${fileName}"`,
                "Content-Type": contentType,
                "Content-Length": buffer.length.toString(), 
            },
        })

    } catch (error) {
        console.error("Shared download error:", error)
        return NextResponse.json({ error: "Download failed due to server error" }, { status: 500 })
    }
}