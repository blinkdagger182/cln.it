"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the screenshots for the carousel
const SCREENSHOTS = [
  {
    image: "/images/cln-screenshot-delete.png",
    alt: "cln. app showing a BMW M3 car image with DELETE overlay",
  },
  {
    image: "/images/cln-screenshot-keep.png",
    alt: "cln. app showing a portrait photo with KEEP overlay",
  },
  {
    image: "/images/cln-plus-screen.png",
    alt: "cln+ Discover interface showing photo albums",
  },
  // Add more screenshots here as needed
]

export function PhonePreview() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SCREENSHOTS.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play when user interacts
  const pauseAutoPlay = () => {
    setIsAutoPlaying(false)
    // Resume after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    pauseAutoPlay()
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? SCREENSHOTS.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    pauseAutoPlay()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SCREENSHOTS.length)
  }

  const goToSlide = (index: number) => {
    pauseAutoPlay()
    setCurrentIndex(index)
  }

  // Handle touch events for swipe on mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      goToNext()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      goToPrevious()
    }
  }

  // Get the next index for the background phone
  const nextIndex = (currentIndex + 1) % SCREENSHOTS.length

  return (
    <div className="relative">
      {/* Main Phone (Front) */}
      <div
        className="relative w-[300px] md:w-[350px] h-[650px] z-10 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={SCREENSHOTS[currentIndex].image || "/placeholder.svg"}
          alt={SCREENSHOTS[currentIndex].alt}
          width={350}
          height={700}
          className="phone-screenshot"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm"
          onClick={goToPrevious}
          aria-label="Previous screenshot"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-white/80 backdrop-blur-sm"
          onClick={goToNext}
          aria-label="Next screenshot"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Second Phone (Background) */}
      <div className="absolute -right-20 top-10 w-[300px] h-[600px] hidden lg:block transform rotate-6 z-0 overflow-hidden">
        <Image
          src={SCREENSHOTS[nextIndex].image || "/placeholder.svg"}
          alt={SCREENSHOTS[nextIndex].alt}
          width={350}
          height={700}
          className="phone-screenshot opacity-70"
        />
      </div>

      {/* Carousel Indicators (Mobile & Desktop) */}
      <div className="flex justify-center mt-4 space-x-2">
        {SCREENSHOTS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
            aria-label={`Go to screenshot ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
