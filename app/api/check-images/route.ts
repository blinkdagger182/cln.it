import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public")

    // Check if the public directory exists
    if (!fs.existsSync(publicDir)) {
      return NextResponse.json({
        success: false,
        error: "Public directory not found",
      })
    }

    // Check if the images directory exists
    const imagesDir = path.join(publicDir, "images")
    const imagesExist = fs.existsSync(imagesDir)

    // Get list of files in public directory (just names)
    const publicFiles = fs
      .readdirSync(publicDir)
      .filter((name) => !fs.statSync(path.join(publicDir, name)).isDirectory())

    // Get list of files in images directory if it exists
    const imageFiles = imagesExist
      ? fs.readdirSync(imagesDir).filter((name) => !fs.statSync(path.join(imagesDir, name)).isDirectory())
      : []

    return NextResponse.json({
      success: true,
      imagesDirectoryExists: imagesExist,
      publicFiles,
      imageFiles,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
