import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "randomuser.me"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      }]
  }
};

export default nextConfig;
