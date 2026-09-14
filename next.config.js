/** @type {import('next').NextConfig} */

const nextConfig = {
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
};

export default nextConfig;