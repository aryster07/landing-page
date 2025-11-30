import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    // Use smaller device sizes for faster loading
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Minimize quality for thumbnails
    minimumCacheTTL: 31536000, // 1 year cache
    formats: ['image/webp', 'image/avif'],
  },
  // Enable experimental features for faster loading
  experimental: {
    optimizeCss: true,
  },
  // Headers for aggressive caching
  async headers() {
    return [
      {
        source: '/api/images',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/:path*.webp',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
