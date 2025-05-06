import Image from "next/image"

interface AppIconProps {
  size?: "small" | "medium" | "large"
  className?: string
}

export function AppIcon({ size = "medium", className = "" }: AppIconProps) {
  // iOS app icons use a "squircle" shape with specific border radius
  // The border radius is approximately 20-25% of the icon size

  const sizes = {
    small: 40,
    medium: 60,
    large: 120,
  }

  const pixelSize = sizes[size]

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
        borderRadius: `${pixelSize * 0.225}px`, // iOS standard border radius is ~22.5% of icon size
      }}
    >
      <Image
        src="/images/cln-logo-rounded.png"
        alt="cln. app icon"
        width={pixelSize}
        height={pixelSize}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
