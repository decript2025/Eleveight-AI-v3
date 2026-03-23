import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

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
  output: 'export', // Enables static export
  basePath: '/eleveight-ai-v3',
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);