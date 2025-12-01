"use client"

import { useEffect } from "react"
import Prism from "prismjs"

export function PrismLoader() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  return null
}
