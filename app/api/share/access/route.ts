import { connectToDatabase } from "@/lib/mongodb"
import { NextResponse, type NextRequest } from "next/server"

/**
 * Helper function to map a file entry (which might be a string or an object) 
 * to the required metadata format ({ path, name }).
 * This handles legacy data where files were stored as just file path strings.
 */
function mapFileToMetadata(fileEntry: any): { path: string, name: string } | null {
    if (typeof fileEntry === 'string' && fileEntry.length > 0) {
        // Handle legacy format: fileEntry is just the path string
        const path = fileEntry;
        // Extract file name from the path string
        const parts = path.split('/');
        const name = parts.pop() || '';

        if (name) {
            return { path, name };
        }
        return null; // Invalid string path
    } else if (fileEntry && typeof fileEntry === 'object' && typeof fileEntry.path === 'string' && typeof fileEntry.name === 'string') {
        // Handle new (correct) format: fileEntry is an object
        if (fileEntry.path.length > 0 && fileEntry.name.length > 0) {
            return {
                path: fileEntry.path,
                name: fileEntry.name,
            };
        }
        return null; // Invalid object structure
    }
    
    return null; // Not a valid file entry
}

// Define the type for file metadata explicitly
type FileMetadata = { path: string, name: string };

/**
 * Dedicated route for accessing the metadata (name, path) of files 
 * shared via a PIN, without downloading the content yet.
 */
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { pin } = body

        if (!pin || typeof pin !== 'string') {
            return NextResponse.json({ error: "Missing or invalid share PIN." }, { status: 400 })
        }

        const { db } = await connectToDatabase()
        
        // 1. Find the sharing record using the PIN
        // We project the 'files' array and 'expiresAt'.
        const shareRecord = await db.collection("shared_pins").findOne(
            { pin }, 
            { projection: { files: 1, expiresAt: 1 } } 
        )
        
        if (!shareRecord) {
            return NextResponse.json({ error: "Invalid share PIN." }, { status: 404 })
        }

        // 2. Check expiration
        if (shareRecord.expiresAt && new Date() > shareRecord.expiresAt) {
            // Optional: delete expired record for cleanup
            await db.collection("shared_pins").deleteOne({ pin });
            return NextResponse.json({ error: "Share PIN has expired." }, { status: 410 })
        }

        // 3. Process the files array using the robust mapping function
        const filesArray = Array.isArray(shareRecord.files) ? shareRecord.files : [];

        // Map and filter out nulls (invalid file entries)
        // By using FileMetadata | null as the type for 'f', we resolve the 'implicit any' warning.
        const fileMetadata = filesArray
            .map(mapFileToMetadata)
            .filter((f: FileMetadata | null): f is FileMetadata => f !== null);

        // 4. Return file metadata
        return NextResponse.json({
            success: true,
            files: fileMetadata,
        }, { status: 200 })

    } catch (error) {
        console.error("Error accessing shared files:", error)
        return NextResponse.json({ error: "Server error during file access." }, { status: 500 })
    }
}