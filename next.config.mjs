/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yourdomain.com',
        port: '',
        pathname: '/path-to-images/**',
      },
    ],
  },
};
  
  export default nextConfig;
  