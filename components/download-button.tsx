"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { isIOS, openAppStore } from "@/utils/detect-ios"

interface DownloadButtonProps {
  className?: string
  children: React.ReactNode
}

export function DownloadButton({ className, children }: DownloadButtonProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Auto-redirect iOS users
    if (isIOS()) {
      const hasVisited = localStorage.getItem("has_visited")
      if (!hasVisited) {
        localStorage.setItem("has_visited", "true")
        openAppStore()
      }
    }
  }, [])

  if (!mounted) {
    // Return a non-interactive version for SSR
    return <Button className={className}>{children}</Button>
  }

  return (
    <Button className={className} onClick={openAppStore}>
      {children}
    </Button>
  )
}
