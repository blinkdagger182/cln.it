"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhonePreview() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    {
      image: "/images/cln-screenshot-delete.png",
      alt: "cln. app showing a BMW M3 car image with DELETE overlay",
    },
    {
      image: "/images/cln-screenshot-keep.png",
      alt: "cln. app showing a portrait photo with KEEP overlay",
    },
  ]

  const handlePrev = () => {
    setCurrentScreen((prev) => (prev === 0 ? screens.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentScreen((prev) => (prev === screens.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      {/* Main Phone Image */}
      <div className="relative w-[300px] md:w-[350px] z-10">
        <Image
          src={screens[currentScreen].image || "/placeholder.svg"}
          alt={screens[currentScreen].alt}
          width={350}
          height={700}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm"
          onClick={handlePrev}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Button>
      </div>

      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm"
          onClick={handleNext}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Button>
      </div>

      {/* Second Phone (for larger screens) */}
      <div className="absolute -right-20 top-10 w-[300px] hidden lg:block transform rotate-6 z-0">
        <Image
          src={screens[currentScreen === 0 ? 1 : 0].image}
          alt={screens[currentScreen === 0 ? 1 : 0].alt}
          width={350}
          height={700}
          className="w-full h-auto opacity-70"
        />
      </div>
    </div>
  )
}
