import withPlaiceholder from '@plaiceholder/next';

const nextConfig = {
  // Other Next.js configurations
  // output: 'standalone',
  swcMinify: true,

  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'd2u2fal3qllrtj.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'random.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.aitc.ai',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
