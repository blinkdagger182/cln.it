import Image from "next/image"
import Link from "next/link"

export default function ImageTestPage() {
  // List of all images used in the app
  const images = [
    { path: "/images/cln-logo.png", name: "cln-logo.png" },
    { path: "/images/cln-logo-white.png", name: "cln-logo-white.png" },
    { path: "/images/cln-logo-new.png", name: "cln-logo-new.png" },
    { path: "/images/cln-logo-rounded.png", name: "cln-logo-rounded.png" },
    { path: "/images/cln-screenshot-delete.png", name: "cln-screenshot-delete.png" },
    { path: "/images/cln-screenshot-keep.png", name: "cln-screenshot-keep.png" },
    { path: "/images/cln-plus-screen.png", name: "cln-plus-screen.png" },
    { path: "/images/cln-discover-logo.png", name: "cln-discover-logo.png" },
    { path: "/images/cln-plus-logo.png", name: "cln-plus-logo.png" },
    { path: "/images/cln-award.png", name: "cln-award.png" },
    { path: "/images/cln-award-large.png", name: "cln-award-large.png" },
    { path: "/images/og-banner.png", name: "og-banner.png" },
    { path: "/favicon.ico", name: "favicon.ico" },
    { path: "/favicon.svg", name: "favicon.svg" },
    { path: "/favicon-16x16.png", name: "favicon-16x16.png" },
    { path: "/favicon-32x32.png", name: "favicon-32x32.png" },
    { path: "/apple-touch-icon.png", name: "apple-touch-icon.png" },
  ]

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Image Loading Test</h1>
      <Link href="/" className="text-blue-500 hover:underline mb-8 block">
        Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img) => (
          <div key={img.path} className="border p-4 rounded-lg">
            <h2 className="font-semibold mb-2">{img.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{img.path}</p>
            <div className="relative h-40 bg-gray-100 rounded overflow-hidden">
              <Image
                src={img.path || "/placeholder.svg"}
                alt={img.name}
                fill
                className="object-contain"
                onError={(e) => {
                  console.error(`Failed to load: ${img.path}`)
                  e.currentTarget.parentElement!.classList.add("bg-red-100")
                  const errorMsg = document.createElement("div")
                  errorMsg.className = "absolute inset-0 flex items-center justify-center text-red-500 text-sm p-2"
                  errorMsg.textContent = "Failed to load image"
                  e.currentTarget.parentElement!.appendChild(errorMsg)
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Troubleshooting Tips</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Check image paths:</strong> Make sure all image paths are correct and images exist in the public
            directory.
          </li>
          <li>
            <strong>Case sensitivity:</strong> Some hosting providers are case-sensitive. Ensure filenames match
            exactly.
          </li>
          <li>
            <strong>File formats:</strong> Ensure image formats are supported (.jpg, .png, .svg, etc.).
          </li>
          <li>
            <strong>Next.js Image optimization:</strong> If using Vercel, image optimization should work automatically.
            For other hosts, you may need to configure Next.js image optimization.
          </li>
          <li>
            <strong>CORS issues:</strong> If images are hosted on a different domain, ensure CORS is properly
            configured.
          </li>
        </ul>
      </div>
    </div>
  )
}
