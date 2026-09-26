import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.static.dragonaere.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com'
      }
    ],
  },
  async rewrites() {
    return [
      // Serve the tracker script from your own domain
      {
        source: '/u/script.js',
        destination: 'https://analytics.andrewstill.cloud/script.js',
      },
      {
        source: '/u/api/send',
        destination: 'https://analytics.andrewstill.cloud/api/send',
      },
    ];
  },
};

export default nextConfig;