// FileTree.tsx

"use client"

import type React from "react"
import { useState, useCallback } from "react"
import type { FileNode } from "@/app/actions"
import styles from "./FileTree.module.css"

interface FileTreeProps {
  tree: FileNode
  onFileSelect: (path: string) => void
  selectedFiles: Set<string>
}

export function FileTree({ tree, onFileSelect, selectedFiles }: FileTreeProps) {
  // Start with root expanded
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["."]))

  const toggleFolder = useCallback((folderPath: string) => {
    setExpandedFolders((prev) => {
      const next = new Set(prev)
      if (next.has(folderPath)) {
        next.delete(folderPath)
      } else {
        next.add(folderPath)
      }
      return next
    })
  }, [])

  return (
    <div className={styles.container}>
      <FileTreeNode
        node={tree}
        expandedFolders={expandedFolders}
        toggleFolder={toggleFolder}
        onFileSelect={onFileSelect}
        selectedFiles={selectedFiles}
        depth={0}
      />
    </div>
  )
}

interface FileTreeNodeProps {
  node: FileNode
  expandedFolders: Set<string>
  toggleFolder: (path: string) => void
  onFileSelect: (path: string) => void
  selectedFiles: Set<string>
  depth: number
}

function FileTreeNode({ node, expandedFolders, toggleFolder, onFileSelect, selectedFiles, depth }: FileTreeNodeProps) {
  const isExpanded = expandedFolders.has(node.path)
  const isFile = node.type === "file"
  const isRoot = depth === 0

  // Check if file is selected (used for coloring the label)
  const isSelected = selectedFiles.has(node.path)

  // Root node doesn't need indentation
  const paddingLeft = isRoot ? 0 : `${depth * 16}px`
  // Line offset for visual guide
  const lineOffset = isRoot ? 0 : `${(depth - 1) * 16 + 8}px`


  const handleToggle = () => {
    if (!isFile) {
      toggleFolder(node.path)
    }
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    if (isFile) {
      onFileSelect(node.path)
    }
  }

  return (
    <div className={styles.nodeWrapper}>
      {/* Visual indentation line for nested folders, starts one level above current depth */}
      {depth > 1 && !isRoot && (
        <div
          className={styles.indentationLine}
          style={{ left: lineOffset }}
        />
      )}
      <div className={styles.nodeContent} style={{ paddingLeft }}>

        {/* Toggle/Checkbox Area */}
        {!isFile && node.children && node.children.length > 0 && (
          <button className={styles.toggle} onClick={handleToggle} aria-label={isExpanded ? "Collapse" : "Expand"}>
            <svg
              className={`${styles.toggleIcon} ${isExpanded ? styles.expanded : ""}`}
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Simple chevron pointing right/down */}
              <path d="M6 4l4 4-4 4" />
            </svg>
          </button>
        )}
        {/* Spacer for non-folder items to align with toggles */}
        {!isFile && node.children && node.children.length === 0 && <div style={{ width: '20px', marginRight: '4px' }}></div>}
        {isFile && (
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              className={styles.checkbox}
              onChange={handleCheckboxChange}
              checked={isSelected}
              id={`file-${node.path}`}
            />
          </div>
        )}
        {/* Label */}
        <label
          htmlFor={isFile ? `file-${node.path}` : undefined}
          className={`${styles.label} ${isFile ? styles.fileLabel : styles.folderLabel} ${isSelected ? styles.selected : ""
            }`}
          onClick={isFile ? undefined : handleToggle} // Only folders toggle on label click
        >
          {getFileIcon(node.name, isFile, isExpanded)}
          <span className={styles.name}>{node.name}</span>
        </label>
      </div>
      {!isFile && isExpanded && node.children && (
        <div className={styles.children}>
          {node.children.map((child) => (
            <FileTreeNode
              key={child.path}
              node={child}
              expandedFolders={expandedFolders}
              toggleFolder={toggleFolder}
              onFileSelect={onFileSelect}
              selectedFiles={selectedFiles}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Updated function to return a React node (SVG) instead of an emoji string
function getFileIcon(filename: string, isFile: boolean, isExpanded: boolean): React.ReactNode {
  if (!isFile) {
    // Folder Icon
    return (
      <svg
        width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        style={{ color: 'var(--color-accent)' }}
      >
        {/* Differentiate between open and closed folders */}
        <path d={isExpanded ? "M4 10.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2h-8.5L9 5H6a2 2 0 0 0-2 2v3.5z" : "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 8.87 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"} />
      </svg>
    );
  }

  // File Icons (using simple icons for popular file types)
  const ext = filename.split(".").pop()?.toLowerCase()
  const iconMap: { [key: string]: React.ReactNode } = {
    // TS/JS/React Icons
    js: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f0db4f" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 7v5h5" stroke="#323330" /></svg>,
    ts: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#007acc" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    tsx: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5L12 2zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    jsx: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#61dafb" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M9 12h6M12 9v6" /></svg>,
    // Config/Markup/Style Icons
    json: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff7b34" strokeWidth="2"><path d="M12 18V6M9 9l3-3 3 3M9 15l3 3 3-3" /></svg>,
    css: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1572b6" strokeWidth="2"><path d="M2 3h20v18H2zM12 7l-2 9-2-9h8" /></svg>,
    html: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e34f26" strokeWidth="2"><path d="M2 3h20v18H2zM12 7l-2 9-2-9h8" /></svg>,
    md: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M9 14l2 2 4-4" /></svg>,
    // Generic/Default
    py: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#306998" strokeWidth="2"><path d="M12 2l-8 4v8l8 4 8-4V6zM12 17v-5h5M12 12h-5" /></svg>,
    // Default Icon
    default: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2zM14 2v6h6" /></svg>
  }

  return iconMap[ext || ""] || iconMap.default
}