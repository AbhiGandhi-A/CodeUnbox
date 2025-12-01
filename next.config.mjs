/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // REMOVE THE experimental block below, it's not needed for API Routes
  /*
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  */
}

export default nextConfig