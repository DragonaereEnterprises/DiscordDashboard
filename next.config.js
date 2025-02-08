/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

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
}

module.export = nextConfig;

// module.exports = withPlausibleProxy({
//   customDomain: 'https://plausible.andrewstill.moe',
//   trackLocalhost: true,
// })(nextConfig);