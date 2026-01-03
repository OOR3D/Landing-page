/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.trustpilot.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.oor3d.com',
      },
    ],
  },
}

export default nextConfig
