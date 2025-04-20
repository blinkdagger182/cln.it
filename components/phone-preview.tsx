"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhonePreview() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    {
      title: "Bye, clutter.",
      count: "7/154",
    },
    {
      title: "So fresh. So cln.",
      count: "8/154",
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
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[570px] bg-black rounded-[40px] p-3 shadow-xl">
        {/* Screen */}
        <div className="relative w-full h-full bg-gray-100 rounded-[32px] overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 py-2 bg-black text-white text-xs">
            <div>8:56</div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M7 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="h-3 w-3">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 14.5L5 18V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V14C19 14.5523 18.5523 15 18 15H8.5V14.5Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>92%</div>
            </div>
          </div>

          {/* App Header */}
          <div className="flex justify-between items-center px-5 py-3">
            <div className="text-lg font-medium">April 2025</div>
            <div className="text-blue-500 font-medium">Next</div>
          </div>

          {/* App Content - Main Area */}
          <div className="px-4 py-2 flex flex-col h-[460px]">
            {/* Card Area */}
            <div className="bg-white rounded-3xl shadow-lg p-6 flex-1 flex flex-col items-center justify-center">
              <div className="mb-4">
                <Image src="/images/cln-logo.png" alt="cln. logo" width={80} height={40} className="h-10 w-auto" />
              </div>
              <p className="text-center text-lg font-medium mb-20">{screens[currentScreen].title}</p>
            </div>

            {/* Counter - Safe Area */}
            <div className="flex justify-center mt-4">
              <div className="bg-gray-700 text-white text-sm px-3 py-1 rounded-full">
                {screens[currentScreen].count}
              </div>
            </div>

            {/* Action Buttons - Safe Area */}
            <div className="flex justify-between px-8 mt-4 mb-8">
              <div className="w-12 h-12 rounded-full border-2 border-red-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 6H5H21" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
                    stroke="#FBBF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-green-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#22C55E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center">
            <div className="w-32 h-1 bg-black rounded-full"></div>
          </div>
        </div>
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
      <div className="absolute -right-20 top-10 w-[280px] h-[570px] bg-black rounded-[40px] p-3 shadow-xl hidden lg:block transform rotate-6">
        <div className="relative w-full h-full bg-gray-100 rounded-[32px] overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center px-5 py-2 bg-black text-white text-xs">
            <div>8:56</div>
            <div className="flex items-center gap-1">
              <div className="h-3 w-3">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path d="M7 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M11 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15 9V15" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="h-3 w-3">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.5 14.5L5 18V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V14C19 14.5523 18.5523 15 18 15H8.5V14.5Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>92%</div>
            </div>
          </div>

          {/* App Content */}
          <div className="flex flex-col items-center justify-center h-full p-6">
            <div className="mb-4">
              <Image src="/images/cln-logo.png" alt="cln. logo" width={60} height={30} className="h-8 w-auto" />
            </div>
            <p className="text-center text-base font-medium">{screens[currentScreen === 0 ? 1 : 0].title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
