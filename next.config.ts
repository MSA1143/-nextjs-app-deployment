import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  headers: [
    {
      source: '/(.*)',
      headers: [
        { key: 'Content-Security-Policy', value: "script-src 'self' 'unsafe-eval'  'unsafe-inline';" },
      ],
    },
  ],
};

export default nextConfig;

export default nextConfig;
