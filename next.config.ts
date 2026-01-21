import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'down-tx-br.img.susercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'down-br.img.susercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'down-cvs-br.img.susercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'down-bs-br.img.susercontent.com',
      },
    ],
  },
};

export default nextConfig;
