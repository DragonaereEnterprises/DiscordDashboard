/** @type {import('next').NextConfig} */

module.exports = {
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
  },}
