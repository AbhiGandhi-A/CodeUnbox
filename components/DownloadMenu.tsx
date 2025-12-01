"use client";

import { useState } from "react";
import { toast } from "sonner";
import styles from "./DownloadMenu.module.css";

interface DownloadMenuProps {
  selectedFilePaths: string[];
  sessionId: string;
  userTier: "anonymous" | "free" | "monthly" | "yearly" | string;
}

export function DownloadMenu({
  selectedFilePaths,
  sessionId,
  userTier,
}: DownloadMenuProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Validate plan type
  const effectiveTier = ["anonymous", "free", "monthly", "yearly"].includes(userTier)
    ? (userTier as "anonymous" | "free" | "monthly" | "yearly")
    : "free";

  // Download permission rules
  const canDownload = {
    anonymous: false,
    free: selectedFilePaths.length <= 10,
    monthly: true,
    yearly: true,
  }[effectiveTier];

  const handleDownload = async (downloadType: "individual" | "zip") => {
    if (!canDownload) {
      toast.error("Your plan does not allow downloads. Please upgrade.");
      return;
    }

    if (!selectedFilePaths.length) {
      toast.error("Please select files.");
      return;
    }

    setIsDownloading(true);
    try {
      const res = await fetch("/api/files/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          files: selectedFilePaths,
          downloadType,
          userTier: effectiveTier,
        }),
      });

      if (!res.ok) {
        toast.error("Download failed.");
        return;
      }

      const blob = await res.blob();
      let filename = "files.zip";

      if (downloadType === "individual" && selectedFilePaths.length === 1) {
        filename = selectedFilePaths[0].split("/").pop() || "file";
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);

      toast.success("Download started!");
    } finally {
      setIsDownloading(false);
    }
  };

  // SAVE ZIP (monthly / yearly only)
  const handleSaveZip = async () => {
    if (effectiveTier !== "monthly" && effectiveTier !== "yearly") {
      toast.error("Upgrade plan to save ZIP folders.");
      return;
    }

    if (!selectedFilePaths.length) {
      toast.error("No files selected.");
      return;
    }

    setIsSaving(true);
    try {
      const files = selectedFilePaths.map((path) => ({
        path,
        content: sessionStorage.getItem(path) || "",
      }));

      const res = await fetch("/api/save-zip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          zipName: `saved-${Date.now()}`,
          files,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to save ZIP");
        return;
      }

      toast.success("ZIP saved successfully!");
    } finally {
      setIsSaving(false);
    }
  };

  const multiple = selectedFilePaths.length > 1;

  return (
    <div className={styles.downloadContainer}>
      {/* Download ZIP / FILE */}
      <button
        className={styles.downloadBtn}
        onClick={() => handleDownload(multiple ? "zip" : "individual")}
        disabled={!canDownload || isDownloading}
      >
        {isDownloading ? "⬇️ Downloading..." : multiple ? "⬇️ Download ZIP" : "⬇️ Download File"}
      </button>

      {/* SAVE ZIP → only monthly + yearly */}
      {(effectiveTier === "monthly" || effectiveTier === "yearly") && (
        <button
          className={styles.saveBtn}
          onClick={handleSaveZip}
          disabled={isSaving}
        >
          {isSaving ? "💾 Saving..." : "💾 Save File"}
        </button>
      )}

      {/* FREE PLAN LIMIT WARNING */}
      {effectiveTier === "free" && selectedFilePaths.length > 10 && (
        <p className={styles.limitNotice}>
          Free plan limited to 10 files. Upgrade for unlimited downloads.
        </p>
      )}
    </div>
  );
}
