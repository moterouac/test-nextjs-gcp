/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['kutai-demo-images.s3.amazonaws.com'],
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "en",
  }
}

module.exports = nextConfig
