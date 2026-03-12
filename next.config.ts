import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'console.eleveight.ai',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
