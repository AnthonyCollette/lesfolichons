/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nvuskzuxrq3sipk2.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
