"use client"

import { useState } from "react"
import { toast } from "sonner"
import styles from "./SaveHistoryButton.module.css"

interface SaveHistoryButtonProps {
  sessionId: string
  onLoadSavedZip: (files: any[]) => void
}

interface SavedZip {
  _id: string
  name: string
  fileCount: number
  blobUrl: string
}

export function SaveHistoryButton({ sessionId, onLoadSavedZip }: SaveHistoryButtonProps) {
  const [showModal, setShowModal] = useState(false)
  const [savedZips, setSavedZips] = useState<SavedZip[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState<string | null>(null) // To track which item is being deleted

  const fetchSavedZips = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/save-zip/list")
      const data = await response.json()
      if (data.success) setSavedZips(data.savedZips)
    } catch (e) {
      toast.error("Failed to fetch saved history")
    } finally {
      setIsLoading(false)
    }
  }

  const handleUse = async (zip: SavedZip) => {
    try {
      const res = await fetch("/api/save-zip/load", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: zip.blobUrl }),
      })

      const data = await res.json()
      if (!data.success) {
        toast.error("Failed to open ZIP")
        return
      }

      onLoadSavedZip(data.files)
      setShowModal(false)
      toast.success(`Loaded '${zip.name}'`)
    } catch {
      toast.error("Error loading ZIP")
    }
  }

  const handleDelete = async (zip: SavedZip) => {
    // Use a custom modal in a real app, but using window.confirm here to quickly add functionality
    if (!window.confirm(`Are you sure you want to delete "${zip.name}"?`)) {
      return
    }

    setIsDeleting(zip._id)
    try {
      const res = await fetch("/api/save-zip/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: zip._id, url: zip.blobUrl }),
      })

      const data = await res.json()
      if (data.success) {
        toast.success(`Deleted '${zip.name}'`)
        // Remove from local state
        setSavedZips((prev) => prev.filter((z) => z._id !== zip._id))
      } else {
        toast.error("Failed to delete ZIP")
      }
    } catch {
      toast.error("Error deleting ZIP")
    } finally {
      setIsDeleting(null)
    }
  }

  return (
    <>
      <button
        className={styles.btn}
        onClick={() => {
          setShowModal(true)
          fetchSavedZips()
        }}
        title="View and Load Saved Folders"
      >
        💾 History
      </button>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2>Saved ZIP Folders</h2>
              <button onClick={() => setShowModal(false)}>×</button>
            </div>

            <div className={styles.modalBody}>
              {isLoading ? (
                <p>Loading...</p>
              ) : savedZips.length === 0 ? (
                <p>No saved ZIPs yet. Upload a folder (multiple files) to save its history.</p>
              ) : (
                <ul className={styles.zipList}>
                  {savedZips.map((zip) => (
                    <li key={zip._id} className={styles.zipItem}>
                      <div className={styles.zipInfo}>
                        <strong>{zip.name}</strong>
                        <span>{zip.fileCount} files</span>
                      </div>

                      <div className={styles.actions}>
                         <button
                            className={styles.deleteBtn}
                            onClick={() => handleDelete(zip)}
                            disabled={isDeleting === zip._id || isDeleting !== null}
                            title={`Delete ${zip.name}`}
                         >
                            {isDeleting === zip._id ? "Deleting..." : "Delete"}
                         </button>
                         <button
                            className={styles.useBtn}
                            onClick={() => handleUse(zip)}
                            disabled={isDeleting !== null}
                            title={`Load ${zip.name}`}
                          >
                            Use
                          </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}