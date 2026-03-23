import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/eleveight-ai-v3',
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'stage-console.eleveight.ai',
        pathname: '/**',
      },
    ],
  }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);