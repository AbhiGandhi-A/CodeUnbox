"use client"

import { ThemeToggle } from "./ThemeToggle"
import { UploadArea } from "./UploadArea"
import { UserMenu } from "./UserMenu"
import { DownloadMenu } from "./DownloadMenu"
import { SaveHistoryButton } from "./SaveHistoryButton"
import styles from "./TopBar.module.css"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { toast } from "sonner" // Import toast for save functionality

interface TopBarProps {
  fileCount: number
  onUpload: (file: File) => void
  isLoading: boolean
  selectedFilePaths: string[]
  sessionId: string
  onShareClick: () => void
  onAccessSharedClick: () => void
  files: { path: string; content: string }[] // Pass the list of files to save

  // required for loading saved ZIP
  onLoadSavedZip: (files: any[]) => void
}

export function TopBar({
  fileCount,
  onUpload,
  isLoading,
  selectedFilePaths,
  sessionId,
  onShareClick,
  onAccessSharedClick,
  onLoadSavedZip, // Left in destructuring since it is used below in SaveHistoryButton
  files, // New prop
}: TopBarProps) {
  
  const { data: session, status } = useSession()

  const [userTier, setUserTier] =
    useState<"anonymous" | "free" | "monthly" | "yearly">("anonymous")
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    if (status === "loading") return

    if (!session?.user) {
      setUserTier("anonymous")
      return
    }

    const plan = session.user.subscriptionPlan || "free"
    setUserTier(plan as "free" | "monthly" | "yearly")
  }, [session, status])

  const handleSave = async () => {
    // files.length will now be the full count of the uploaded zip
    if (files.length < 2) { 
      toast.error("Please upload a folder (multiple files) to save.")
      return
    }

    const zipName = prompt("Enter a name for the saved ZIP folder:")
    if (!zipName) return

    setIsSaving(true)
    try {
      // This fetch uses the `files` prop, which now contains ALL file contents.
      const res = await fetch("/api/save-zip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ zipName, files }),
      })

      const data = await res.json()
      if (data.success) {
        toast.success(`Folder '${zipName}' saved successfully!`)
      } else {
        toast.error(data.error || "Failed to save ZIP")
      }
    } catch {
      toast.error("Error saving ZIP")
    } finally {
      setIsSaving(false)
    }
  }

  // Use files.length instead of fileCount for the save check, 
  // though they should be the same after the fix in page.tsx
  const canSave = (userTier === "monthly" || userTier === "yearly") && files.length > 1

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l.5 1h6.5a1 1 0 0 1 1 1v3H4V4a1 1 0 0 1 1-1h6.5l.5-1" />
            <rect x="4" y="5" width="16" height="14" rx="1" />
            <path d="M8 9h8M8 13h8M8 17h4" strokeOpacity="0.5" />
          </svg>
          <h1 className={styles.title}>Code Explorer</h1>
        </div>
      </div>

      <div className={styles.middle}>
        <UploadArea onUpload={onUpload} isLoading={isLoading} />
      </div>

      <div className={styles.right}>
        <div className={styles.stats}>
          <span className={styles.label}>Files:</span>
          <span className={styles.value}>{fileCount}</span>
        </div>

        {selectedFilePaths.length > 0 && (
          <>
            <DownloadMenu
              selectedFilePaths={selectedFilePaths}
              sessionId={sessionId}
              userTier={userTier}
            />

            <button
              className={styles.shareBtn}
              onClick={onShareClick}
              title="Share files with PIN"
            >
              📤 Share
            </button>
          </>
        )}

        {/* NEW: Save Button visible only if pro/premium AND fileCount > 1 */}
        {canSave && (
          <button
            className={styles.saveBtn}
            onClick={handleSave}
            disabled={isSaving}
            title="Save the currently loaded folder"
          >
            {isSaving ? "Saving..." : "⭐ Save Folder"}
          </button>
        )}
        
        {(userTier === "monthly" || userTier === "yearly") && (
          <SaveHistoryButton
            sessionId={sessionId}
            onLoadSavedZip={onLoadSavedZip}
          />
        )}

        <button
          className={styles.accessBtn}
          onClick={onAccessSharedClick}
          title="Access shared files"
        >
          🔓 Access Shared
        </button>

        <ThemeToggle />
        <UserMenu />
      </div>
    </header>
  )
}