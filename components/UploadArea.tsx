"use client"

import type React from "react"

import { useRef } from "react"
import styles from "./UploadArea.module.css"

interface UploadAreaProps {
  onUpload: (file: File) => void
  isLoading: boolean
}

export function UploadArea({ onUpload, isLoading }: UploadAreaProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return
    const file = files[0]

    if (!file.name.endsWith(".zip")) {
      alert("Please select a .zip file")
      return
    }

    onUpload(file)
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFileSelect(e.target.files)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    handleFileSelect(e.dataTransfer.files)
  }

  return (
    <div
      className={`${styles.container} ${isLoading ? styles.loading : ""}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button
        className={styles.button}
        onClick={handleClick}
        disabled={isLoading}
        title="Click to upload or drag and drop a .zip file"
      >
        {isLoading ? (
          <>
            <span className={styles.spinner} />
            Uploading...
          </>
        ) : (
          <>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span>Upload ZIP File</span>
          </>
        )}
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept=".zip"
        onChange={handleInputChange}
        style={{ display: "none" }}
        disabled={isLoading}
      />
    </div>
  )
}
