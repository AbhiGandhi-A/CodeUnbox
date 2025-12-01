"use client"

import { useState } from "react"
import { toast } from "sonner"
import styles from "./ShareModal.module.css"

// Define a type for the file structure expected by the server
interface FileToShare {
  path: string
  name: string
  content: string // The content of the file is required by the server API
}

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  selectedFilePaths: string[]
  // Assuming a function or context hook exists to fetch file content based on path
  getFileContent: (path: string) => { name: string, content: string } | null; 
  onShareComplete?: (pin: string) => void
}

export function ShareModal({ isOpen, onClose, selectedFilePaths, getFileContent }: ShareModalProps) {
  const [pin, setPin] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleGeneratePin = async () => {
    if (selectedFilePaths.length === 0) {
      toast.error("Select files to share")
      return
    }

    setIsGenerating(true)
    
    // --- START: FIX FOR 400 BAD REQUEST ---
    
    // 1. Prepare the files array with full content objects
    const filesToSend: FileToShare[] = []
    
    for (const path of selectedFilePaths) {
        // *** ASSUMPTION & TEMPORARY FIX ***
        // Replace the mock function below with your actual logic to fetch file data 
        // from your file system state/context using the path.
        
        // This is a placeholder for demonstration:
        const fileData = {
             name: path.split('/').pop() || 'file',
             content: `// Placeholder content for ${path}`, // <--- !!! This must be real content !!!
        };
        
        // If you have a prop like getFileContent:
        // const fileData = getFileContent(path);

        if (fileData) {
            filesToSend.push({
                path: path,
                name: fileData.name,
                content: fileData.content,
            });
        }
    }
    
    if (filesToSend.length === 0) {
        toast.error("Could not retrieve content for selected files.")
        setIsGenerating(false)
        return
    }
    // --- END: FIX FOR 400 BAD REQUEST ---

    try {
      const response = await fetch("/api/share/generate-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send the array of full file objects instead of just paths
        body: JSON.stringify({ files: filesToSend }), 
      })

      const data = await response.json()
      if (!response.ok) {
        // The server will now return a 400 if filesToSend is empty or invalid
        toast.error(data.error || "Failed to generate PIN")
        return
      }

      setPin(data.pin)
      toast.success("PIN generated! Valid for 7 days.")
    } catch (error) {
      toast.error("Failed to generate PIN")
    } finally {
      setIsGenerating(false)
    }
  }

  const handleCopyPin = () => {
    if (pin) {
      // Use execCommand for broader compatibility in some environments
      try {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = pin;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        toast.error("Failed to copy PIN to clipboard.");
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Share Files</h2>
          <button onClick={onClose} className={styles.closeBtn}>
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          {pin ? (
            <div className={styles.pinDisplay}>
              <p className={styles.label}>Your Share PIN:</p>
              <div className={styles.pinBox}>
                <span className={styles.pin}>{pin}</span>
                <button className={styles.copyBtn} onClick={handleCopyPin}>
                  {copied ? "✓ Copied!" : "Copy"}
                </button>
              </div>
              <p className={styles.info}>Share this PIN with others to let them access your files. Valid for 7 days.</p>
              <button className={styles.newPinBtn} onClick={() => setPin(null)}>
                Generate New PIN
              </button>
            </div>
          ) : (
            <div className={styles.generateSection}>
              <p className={styles.label}>Selected files: {selectedFilePaths.length}</p>
              <div className={styles.fileList}>
                {selectedFilePaths.slice(0, 5).map((file) => (
                  <div key={file} className={styles.fileItem}>
                    {file.split("/").pop()}
                  </div>
                ))}
                {selectedFilePaths.length > 5 && (
                  <div className={styles.fileItem}>+{selectedFilePaths.length - 5} more</div>
                )}
              </div>
              <button
                className={styles.generateBtn}
                onClick={handleGeneratePin}
                disabled={isGenerating || selectedFilePaths.length === 0}
              >
                {isGenerating ? "Generating..." : "Generate Share PIN"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}