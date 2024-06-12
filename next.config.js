/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: 'export', // Add this line for static HTML export
}

module.exports = nextConfig;