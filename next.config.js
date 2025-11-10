/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    reactCompiler: false,
  },
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig; 