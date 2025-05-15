/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Ensure images are properly optimized
    formats: ['image/avif', 'image/webp'],
    // If you're using external images, add domains here
    // domains: ['example.com'],
    // For local development and testing
    unoptimized: true,
  },
  // Ensure output is properly configured for your hosting provider
  output: 'standalone',
};

export default nextConfig;
