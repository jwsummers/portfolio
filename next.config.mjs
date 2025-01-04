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
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; img-src 'self' https://cdn.simpleicons.org/; script-src 'none';",
  },
};

export default nextConfig;
