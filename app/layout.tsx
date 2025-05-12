import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://cln.it.com"),
  title: "cln. your Camera Roll's Best Friend",
  description: "Clean your Photos. iPhone Photos sucks. Try our app.",
  keywords: [
    "photo cleaning",
    "photo management",
    "declutter photos",
    "tinder swipe photos",
    "photo organization",
    "clean camera roll",
    "photo gallery app",
  ],
  authors: [{ name: "Risk Creatives", url: "https://riskstudios.my" }],
  creator: "Risk Creatives",
  publisher: "Risk Creatives",

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cln.it.com",
    title: "Clean your Photos. iPhone Photos sucks. Try our app.",
    description: "Swipe to wipe. Clean up your gallery with fast, intuitive gestures.",
    siteName: "cln.",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1200,
        height: 630,
        alt: "cln. - Clean your Photos. iPhone Photos sucks. Try our app.",
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Clean your Photos. iPhone Photos sucks. Try our app.",
    description: "Swipe to wipe. Clean up your gallery with fast, intuitive gestures.",
    images: ["/images/og-banner.png"],
    creator: "@cln_it",
  },

  // App-specific metadata
  applicationName: "cln.",
  appleWebApp: {
    capable: true,
    title: "cln.",
    statusBarStyle: "black-translucent",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  // Verification
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code if you have one
  },

  // Canonical URL
  alternates: {
    canonical: "https://cln.it.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E879F9" />

        {/* Explicit Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cln_it" />
        <meta name="twitter:title" content="Clean your Photos. iPhone Photos sucks. Try our app." />
        <meta
          name="twitter:description"
          content="Swipe to wipe. Clean up your gallery with fast, intuitive gestures."
        />
        <meta name="twitter:image" content="https://cln.it.com/images/og-banner.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
