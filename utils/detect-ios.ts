"use client"

import type React from "react"

export function isIOS(): boolean {
  if (typeof window === "undefined") return false

  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}

export function openAppStore(e?: React.MouseEvent): void {
  if (e) e.preventDefault()

  const appStoreUrl = "https://apps.apple.com/my/app/cln-swipe-to-clean/id6744550725"
  window.location.href = appStoreUrl
}
