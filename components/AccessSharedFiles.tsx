// C:\Users\abhig\Downloads\zip-explorer1\components\AccessSharedFiles.tsx

"use client"

import { useState } from "react"
import { toast } from "sonner"
// Assuming this is the correct path to your style module
import styles from "@/components/AccessSharedFiles.module.css" 

interface SharedFile {
    path: string // This MUST be present and unique (e.g., "src/index.js")
    content: string // Note: content is not used here but kept for interface consistency
    name: string // This is the displayed filename (e.g., "index.js")
}

interface AccessSharedFilesProps {
    isOpen: boolean
    onClose: () => void
}

export function AccessSharedFiles({ isOpen, onClose }: AccessSharedFilesProps) {
    const [pin, setPin] = useState("")
    const [files, setFiles] = useState<SharedFile[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isDownloading, setIsDownloading] = useState(false)
    const [accessed, setAccessed] = useState(false)

    const handleAccessFiles = async () => {
        if (!pin || !/^\d{4}$/.test(pin)) {
            toast.error("Invalid PIN format (4 digits)")
            return
        }

        setIsLoading(true)
        try {
            // 1. Fetch files associated with the PIN via the API route
            const response = await fetch("/api/share/access", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ pin }),
            })

            const data = await response.json()
            if (!response.ok) {
                // Handle specific expiration status (410) if the backend returns it
                if (response.status === 410) {
                    toast.error("The share PIN has expired.")
                } else {
                    toast.error(data.error || "Failed to access files")
                }
                setFiles([]); // Ensure files state is reset on failure
                return
            }

            // FIX: Ensure file objects have a valid path before setting state.
            // The API route should provide { path: string, name: string }
            const validFiles = data.files.filter((f: SharedFile) => f && f.path && f.name)
            
            setFiles(validFiles)
            setAccessed(true)
            
            if (validFiles.length === 0) {
                 // Warning if the share exists but contains no valid files
                 toast.warning("Share accessed, but no files are available.")
            } else {
                 toast.success(`Files accessed! Found ${validFiles.length} file(s).`)
            }

        } catch (error) {
            console.error("Access Shared Files Error:", error);
            toast.error("Failed to access files due to an error.")
        } finally {
            setIsLoading(false)
        }
    }

    const handleDownloadShared = async () => {
        if (!pin) {
            toast.error("PIN is required for download.")
            return;
        }
        
        const validFilePaths = files.map(f => f.path).filter(p => p && typeof p === 'string');

        if (validFilePaths.length === 0) {
            toast.error("No valid files to download.")
            return;
        }

        setIsDownloading(true);

        try {
            // 2. Call the dedicated API endpoint for PIN-based download
            const response = await fetch("/api/share/download", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Pass the PIN and the list of paths to be zipped
                body: JSON.stringify({ pin, files: validFilePaths }),
            });

            if (!response.ok) {
                // The error response needs to be parsed if available
                let errorData = { error: "Download failed due to server error." };
                try {
                    errorData = await response.json();
                } catch (e) {
                    // response was not JSON, use generic message
                }
                toast.error(errorData.error || "Download failed")
                return
            }

            // 3. Initiate client-side download from the blob response
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            
            a.href = url
            a.download = "shared_files.zip" 
            
            a.click()
            window.URL.revokeObjectURL(url)
            
            toast.success("Download started!")

        } catch (error) {
            console.error("Download shared files failed:", error)
            toast.error("Download failed due to client error.")
        } finally {
            setIsDownloading(false);
        }
    }

    if (!isOpen) return null

    const fileCount = files.length;
    // Updated text to reflect "FILES AVAILABLE" structure
    const fileCountText = fileCount === 1 ? "FILE AVAILABLE" : "FILES AVAILABLE"; 

    return (
        <div className={styles.modal} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>Access Shared Files</h2>
                    <button onClick={onClose} className={styles.closeBtn}>
                        ×
                    </button>
                </div>

                <div className={styles.modalBody}>
                    {!accessed ? (
                        <div className={styles.pinInput}>
                            <label className={styles.label}>Enter Share PIN:</label>
                            <input
                                type="text"
                                maxLength={4}
                                placeholder="0000"
                                value={pin}
                                // Only allow digits and limit length to 4
                                onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                                className={styles.input}
                            />
                            <button className={styles.accessBtn} onClick={handleAccessFiles} disabled={isLoading || pin.length !== 4}>
                                {isLoading ? "Accessing..." : "Access Files"}
                            </button>
                        </div>
                    ) : (
                        <div className={styles.filesDisplay}>
                            <p className={styles.label}>{fileCount} {fileCountText}</p>
                            
                            <div className={styles.fileList}>
                                {fileCount > 0 ? (
                                    files.map((file, index) => (
                                        <div key={file.path || index} className={styles.fileItem}>
                                            <span>{file.name}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className={styles.noFiles}>No files available in this share.</div>
                                )}
                            </div>
                            
                            <button 
                                className={styles.downloadBtn} 
                                onClick={handleDownloadShared} 
                                disabled={isDownloading || fileCount === 0}
                            >
                                {isDownloading ? "⬇️ Preparing Download..." : "⬇️ Download All Files"}
                            </button>
                            <button
                                className={styles.newAccessBtn}
                                onClick={() => {
                                    setPin("")
                                    setFiles([])
                                    setAccessed(false)
                                }}
                            >
                                Access Another PIN
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}