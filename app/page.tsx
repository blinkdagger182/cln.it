import Image from "next/image"
import Link from "next/link"
import { DownloadButton } from "@/components/download-button"
import { PhonePreview } from "@/components/phone-preview"
import StructuredData from "./structured-data"

export default function Home() {
  return (
    <main className="min-h-screen">
      <StructuredData />

      {/* Hero Section with Gradient Background */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-pink-400 via-purple-400 to-green-300">
        <div className="container px-4 py-8 mx-auto">
          {/* Navigation */}
          <nav className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/cln-logo-rounded.png"
                  alt="cln. logo"
                  width={100}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#how-it-works" className="text-white hover:text-white/80 transition">
                How it works
              </Link>
              <Link href="#discover" className="text-white hover:text-white/80 transition">
                Discover
              </Link>
              <Link href="#download" className="text-white hover:text-white/80 transition">
                Download
              </Link>
            </div>
            <DownloadButton className="bg-black text-white hover:bg-black/80">Download</DownloadButton>
          </nav>

          {/* Membership Banner */}
          <div className="flex flex-wrap items-center justify-start gap-4 mt-8">
            <div className="bg-black/80 text-white text-sm px-4 py-2 rounded-full">cln. is officially live</div>
            <Link
              href="https://apps.apple.com/my/app/cln-swipe-to-clean/id6744550725"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm flex items-center gap-1 hover:underline"
            >
              Get Access on iOS <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-20">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Your Camera Roll's Best Friend
              </h1>
              <p className="text-xl text-white/90 max-w-md">
                Swipe to wipe. Clean up your gallery with fast, intuitive gestures that make photo decluttering
                effortless and even fun.
              </p>
              <div>
                <DownloadButton className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                  Get started
                </DownloadButton>
              </div>
            </div>

            <div className="relative flex flex-col items-center md:items-end">
              {/* Award Image positioned above device preview */}
              <div className="mb-4 md:mb-6 w-48 md:w-64 lg:w-80">
                <Image
                  src="/images/cln-award-large.png"
                  alt="cln. award - The Winner in our group"
                  width={320}
                  height={320}
                  className="w-full h-auto"
                />
              </div>
              <PhonePreview />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How cln. works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="Camera">
                  📱
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Connect your photos</h3>
              <p className="text-gray-600">Grant access to your photo library and let cln. analyze your collection.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="Swipe">
                  👆
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Swipe through photos</h3>
              <p className="text-gray-600">Use intuitive swipe gestures to keep, delete, or bookmark your photos.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl" role="img" aria-label="Sparkle">
                  ✨
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy a cleaner gallery</h3>
              <p className="text-gray-600">Watch your photo collection become organized and clutter-free in minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center mb-12">
            <Image src="/images/cln-plus-logo.png" alt="cln+" width={200} height={100} className="mb-6" />
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full text-white text-sm font-medium mb-6">
              Premium Feature
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-center">Unlock cln+</h2>
            <p className="text-xl text-center text-gray-600 mt-3 max-w-2xl">Smarter, faster, and more powerful.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-white mr-3">
                      1
                    </span>
                    Smart Album Creation
                  </h3>
                  <p className="text-gray-600">
                    cln+ automatically groups your photos by time and location—like "Evening at 17 Jun 2024"—making it
                    easier to review memories in context.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center text-white mr-3">
                      2
                    </span>
                    Relevance-Based Sorting
                  </h3>
                  <p className="text-gray-600">
                    Sort albums by most relevant or most photos to quickly focus on what matters most.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-2 flex items-center">
                    <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-full flex items-center justify-center text-white mr-3">
                      3
                    </span>
                    Batch Swipe Review
                  </h3>
                  <p className="text-gray-600">
                    Swipe through grouped photos to delete, save, or mark as maybe—freeing up storage while keeping your
                    best shots.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src="/images/cln-plus-screen.png"
                alt="cln+ Discover interface showing photo albums"
                width={350}
                height={700}
                className="w-auto h-auto max-w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-pink-400 via-purple-400 to-green-300 text-white">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to declutter your photo gallery?</h2>
            <p className="text-xl mb-8">Download cln. today and experience the joy of a tidy photo collection.</p>
            <div className="flex justify-center">
              <DownloadButton className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg">
                Download for iOS
              </DownloadButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <Image
                src="/images/cln-logo-rounded.png"
                alt="cln. logo"
                width={80}
                height={32}
                className="h-8 w-auto mb-4"
              />
              <p className="text-sm text-gray-400">
                A photo cleaning app that uses tinder like swiping to go through your photo gallery effortlessly.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="https://riskstudios.my"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Risk Creatives
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="https://www.instagram.com/cln.it?igsh=M3oycmZ5dGIwZ21r"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy.html" className="hover:text-white transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="https://cln.it.com/terms.html" className="hover:text-white transition">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} cln. by{" "}
              <Link
                href="https://riskstudios.my"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Risk Creatives
              </Link>
              . All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
