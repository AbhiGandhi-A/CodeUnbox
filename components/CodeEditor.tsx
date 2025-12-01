// CodeEditor.tsx

"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { toast } from "sonner"
import styles from "./CodeEditor.module.css"

interface EditorFile {
  path: string
  content: string
}

interface CodeEditorProps {
  files: EditorFile[]
  isLoading: boolean
  sessionId: string
  userTier: "anonymous" | "free" | "monthly" | "yearly"
}

export function CodeEditor({ files, isLoading, sessionId, userTier }: CodeEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [prismReady, setPrismReady] = useState(false)
  // State to hold editable content. Key is file.path, value is the content string.
  const [editableContent, setEditableContent] = useState<Record<string, string>>({})
    
    // Refs for cursor preservation
    const focusedPath = useRef<string | null>(null) // Tracks the path of the currently focused <pre>
  const cursorOffsets = useRef<Map<string, number | null>>(new Map()) // Stores caret offset for each path
    const scrollPositions = useRef<Map<string, { top: number, left: number }>>(new Map()); // Stores scroll position

    // --- Cursor Preservation Utility Functions ---

    /**
     * Reads the caret position as a character offset from the start of the <pre> element's raw text content.
     * This version accurately calculates the offset by traversing only text nodes up to the caret position.
     */
    const getCaretOffset = (element: HTMLElement | null): number => {
        let offset = 0;
        const selection = window.getSelection();

        // Check if we are inside the element and have a valid selection
        if (!element || !selection || selection.rangeCount === 0 || !element.contains(selection.anchorNode)) {
             return offset;
        }

        const range = selection.getRangeAt(0);
        let currentRange = document.createRange();
        
        // Clone the range from the start of the element to the end of the selection
        currentRange.setStart(element, 0);
        currentRange.setEnd(range.endContainer, range.endOffset);
        
        // Calculate the raw text length from the start of the element up to the caret.
        // This handles cases where Prism wraps text in <span> elements.
        const treeWalker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null, // Only 3 arguments are expected by document.createTreeWalker in modern environments.
            // false // Removed the deprecated fourth argument to fix the TypeScript error.
        );
        
        let currentNode: Node | null;
        let foundNode = false;

        // Iterate through all text nodes
        while ((currentNode = treeWalker.nextNode())) {
            if (currentNode === range.endContainer) {
                // If this is the node containing the caret, add the offset within that node.
                offset += range.endOffset;
                foundNode = true;
                break;
            } else if (currentRange.intersectsNode(currentNode)) {
                // If this node is before the caret, add its full text length to the offset.
                offset += currentNode.textContent?.length || 0;
            } else if (foundNode) {
                // Stop traversing once the target node is found and processed
                break;
            }
        }

        return offset;
    };
    
    /**
     * Sets the caret position within the given element based on a character offset.
     */
    const setCaretOffset = (element: HTMLElement | null, offset: number): void => {
        if (!element || offset === null) return;
    
        let totalOffset = 0;
        let found = false;
        
        // Traverse all child nodes (including text nodes created by Prism)
        const traverse = (node: Node) => {
            if (found) return;
    
            if (node.nodeType === Node.TEXT_NODE) {
                const nodeLength = node.textContent?.length || 0;
                
                if (totalOffset + nodeLength >= offset) {
                    const finalOffset = offset - totalOffset;
                    const range = document.createRange();
                    const selection = window.getSelection();
    
                    try {
                        range.setStart(node, finalOffset);
                        range.collapse(true);
    
                        selection?.removeAllRanges();
                        selection?.addRange(range);
                        found = true;
                    } catch (e) {
                        console.error("Error setting caret range:", e);
                    }
                    return;
                }
                totalOffset += nodeLength;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // Traverse children of element nodes
                for (let i = 0; i < node.childNodes.length; i++) {
                    traverse(node.childNodes[i]);
                }
            }
        };
    
        traverse(element);
        
        // Fallback: If not found, place cursor at the end.
        if (!found) {
            element.focus();
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(element);
            range.collapse(false); // Collapse to the end
            selection?.removeAllRanges();
            selection?.addRange(range);
        }
    };
    // --- End Cursor Preservation Utility Functions ---


  // useEffect 1: Initialize editableContent state when 'files' prop changes
  useEffect(() => {
    const newContent: Record<string, string> = {}
    files.forEach(file => {
      // Only initialize if content for this path is missing or if files list changes completely
      if (!editableContent[file.path] || files.length !== Object.keys(editableContent).length) {
        newContent[file.path] = file.content
      } else {
        // Keep existing edited content if the file path is the same
        newContent[file.path] = editableContent[file.path]
      }
    })
    setEditableContent(newContent)
  // We intentionally exclude editableContent from the dependency array to prevent infinite loops
  // and manage updates via the handleInput method.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]) 


  // useEffect 2: Load Prism libraries (as before)
  useEffect(() => {
    if (typeof window === "undefined") return
    if ((window as any).Prism) {
      setPrismReady(true)
      return
    }

    const cssLink = document.createElement("link")
    cssLink.rel = "stylesheet"
    cssLink.href = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"
    document.head.appendChild(cssLink)

    const script = document.createElement("script")
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
    script.onload = () => {
      const commonLanguages = ["javascript", "typescript", "python", "bash", "json", "css", "markup", "markdown"] // Added markdown
      let loaded = 0

      commonLanguages.forEach((lang) => {
        const langScript = document.createElement("script")
        langScript.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${lang}.min.js`
        langScript.onload = () => {
          loaded++
          if (loaded === commonLanguages.length) {
            setPrismReady(true)
          }
        }
        langScript.onerror = () => {
          loaded++
          if (loaded === commonLanguages.length) {
            setPrismReady(true)
          }
        }
        document.head.appendChild(langScript)
      })
    }
    script.onerror = () => {
      console.warn("Failed to load Prism")
      setPrismReady(true)
    }
    document.head.appendChild(script)
  }, [])

  // useEffect 3: Apply syntax highlighting and restore cursor & scroll
  useEffect(() => {
    if (!prismReady || !editorRef.current || isLoading || files.length === 0) return
    
    // We need to wait briefly for the DOM to update after state changes
    const timer = setTimeout(() => {
      if ((window as any).Prism && editorRef.current) {
        try {
          const activePath = focusedPath.current
          const pres = editorRef.current.querySelectorAll(`.${styles.codeArea}`);
          let activePreElement: HTMLElement | null = null;

          pres.forEach((pre) => {
            // Highlight the content of the PRE element, which replaces innerHTML
            (window as any).Prism.highlightElement(pre)
                        
                        // Identify the element that needs cursor and scroll restoration
                        const prePath = pre.getAttribute('data-filepath');
                        if (activePath && prePath === activePath) {
                            activePreElement = pre as HTMLElement;
                        }
          })
                    
                    // Restore Cursor and Scroll Position after highlighting
                    if (activePath && activePreElement) {
                        // Cast to HTMLPreElement to ensure access to scroll properties
                        const preElement = activePreElement as HTMLPreElement; 

                        const offset = cursorOffsets.current.get(activePath);
                        if (offset !== undefined && offset !== null) {
                            setCaretOffset(preElement, offset);
                        }

                        const scroll = scrollPositions.current.get(activePath);
                        if (scroll) {
                            preElement.scrollTop = scroll.top;
                            preElement.scrollLeft = scroll.left;
                        }
                    }

        } catch (e) {
          console.warn("Prism highlighting error:", e)
        }
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [files, isLoading, prismReady, editableContent])


  // Handler to capture user input
  const handleInput = useCallback((filePath: string, event: React.FormEvent<HTMLPreElement>) => {
        // Explicitly cast to HTMLPreElement to guarantee scroll properties exist
    const currentPreElement = event.currentTarget as HTMLPreElement;
    
        // 1. Save Scroll Position BEFORE state change
        scrollPositions.current.set(filePath, {
            top: currentPreElement.scrollTop,
            left: currentPreElement.scrollLeft
        });

    // 2. Save Cursor Position BEFORE state change (DOM is still valid)
    const offset = getCaretOffset(currentPreElement); 
    cursorOffsets.current.set(filePath, offset);

    // 3. Update Content
    const newContent = currentPreElement.innerText || ""
    setEditableContent(prev => ({
      ...prev,
      [filePath]: newContent
    }))
  }, [])
  
    // Handlers for focus/blur to track the active editor
    const handleFocus = useCallback((filePath: string) => {
        focusedPath.current = filePath;
    }, [])
    
    // We don't need a custom handleBlur since the restoration logic is in useEffect
    const handleBlur = useCallback(() => {
        // No operation needed.
    }, [])
  

  // Update copyToClipboard to use edited content
  const copyToClipboard = async () => {
    // Create a list of the *current* content for selected files
    const contentToCopy = files.map(f => ({
      path: f.path,
      content: editableContent[f.path] || f.content
    }))
    
    const text = contentToCopy.map((f) => `${f.path}\n\n${f.content}`).join("\n\n" + "=".repeat(80) + "\n\n")
    // Fallback for document.execCommand('copy') in environments where navigator.clipboard might fail
    try {
      await navigator.clipboard.writeText(text)
      toast.success("Copied to clipboard!")
    } catch {
      // Fallback: create a temporary textarea for copying
              const tempTextArea = document.createElement("textarea");
              tempTextArea.value = text;
              document.body.appendChild(tempTextArea);
              tempTextArea.select();
              document.execCommand('copy');
              document.body.removeChild(tempTextArea);
      toast.success("Copied to clipboard! (Fallback)")
    }
  }

  // --- handleSave function removed as requested ---

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h2 className={styles.title}>
            {files.length > 0 ? `${files.length} file(s) selected` : "No files selected"}
          </h2>
        </div>
        <div className={styles.headerRight}>
          {files.length > 0 && (
            <>
              <button className={styles.copyButton} onClick={copyToClipboard}>
                Copy All Code
              </button>
              {/* Removed the Save Button conditional block:
              {userTier !== "anonymous" && userTier !== "free" && (
                <button className={styles.saveButton} onClick={handleSave}>
                  💾 Save
                </button>
              )}
              */}
            </>
          )}
        </div>
      </div>

      <div className={styles.editorContent} ref={editorRef}>
        {isLoading ? (
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <p>Loading file...</p>
          </div>
        ) : files.length === 0 ? (
          <div className={styles.empty}>
            <p>Select files from the explorer to view their content</p>
          </div>
        ) : (
          <div className={styles.codeBlocks}>
            {files.map((file, index) => {
              // Use the currently edited content from state
              const content = editableContent[file.path] || file.content
              const prismContent = content

              return (
              <div key={file.path} className={styles.codeBlock}>
                <div className={styles.fileHeader}>
                  <span className={styles.filePath}>{file.path}</span>
                  <span className={styles.fileIndex}>{index + 1}</span>
                </div>
                
                {/* The <pre> element for contentEditable. Prism will replace the innerHTML 
                                 on re-render, and the cursor/scroll preservation logic handles the state change.
                                */}
                <pre 
                  // Apply both language class for Prism and custom style class
                  className={`${getLanguageClass(file.path)} ${styles.codeArea}`} 
                  contentEditable 
                                  spellCheck="true"
                                  data-filepath={file.path} // Required for identifying the element in useEffect
                                  onFocus={() => handleFocus(file.path)} // Track focus
                  onInput={(e) => handleInput(file.path, e)}
                  // Initialize content with raw text. This is replaced by Prism's HTML on effect run.
                  dangerouslySetInnerHTML={{ __html: prismContent }}
                  // Accessibility attributes
                  role="textbox"
                  aria-multiline="true"
                />
              </div>
            )})}
          </div>
        )}
      </div>
    </div>
  )
}

function getLanguageClass(filepath: string): string {
  const ext = filepath.split(".").pop()?.toLowerCase()
  const languageMap: { [key: string]: string } = {
    js: "language-javascript",
    ts: "language-typescript",
    tsx: "language-typescript",
    jsx: "language-javascript",
    py: "language-python",
    json: "language-json",
    css: "language-css",
    html: "language-markup",
    md: "language-markdown",
  }
  // Prism requires a language- prefix to identify the code block type
  return languageMap[ext || ""] || "language-text"
}