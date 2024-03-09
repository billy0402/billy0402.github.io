/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    instrumentationHook: process.env.INSTRUMENTATION === 'true',
  },
  webpack: (config, { isServer }) => {
    /*
     * Webpack 5 removed automatic Node.js polyfills.
     * https://github.com/webpack/changelog-v5#automatic-nodejs-polyfills-removed
     */
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        stream: false,
      };
    }

    return config;
  },
};

module.exports = nextConfig;
