import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public")
    const imagesDir = path.join(publicDir, "images")

    // Check if the images directory exists
    const imagesExist = fs.existsSync(imagesDir)

    // Get all files in the public directory
    const publicFiles = fs.existsSync(publicDir)
      ? fs
          .readdirSync(publicDir, { withFileTypes: true })
          .filter((dirent) => dirent.isFile())
          .map((dirent) => dirent.name)
      : []

    // Get all files in the images directory
    const imageFiles = imagesExist
      ? fs
          .readdirSync(imagesDir, { withFileTypes: true })
          .filter((dirent) => dirent.isFile())
          .map((dirent) => dirent.name)
      : []

    return NextResponse.json({
      success: true,
      imagesDirectoryExists: imagesExist,
      publicFiles,
      imageFiles,
    })
  } catch (error) {
    console.error("Error checking images:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to check images",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
