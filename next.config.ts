import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_BASE_API_URL || '';
const apiUrlHostname = new URL(apiUrl).hostname;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: apiUrlHostname,
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
