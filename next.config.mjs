/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["react", "react-dom"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;


