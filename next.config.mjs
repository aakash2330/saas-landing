/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com", "assets.aceternity.com"],
  },
};

export default nextConfig;
