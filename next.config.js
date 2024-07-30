/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        "lh3.googleusercontent.com",
        "firebasestorage.googleapis.com",
        "res.cloudinary.com"
      ]
    },
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
    async headers() {
      return [
        {
          source: '/api/(.*)',
          headers: [
            { key: 'Content-Type', value: 'application/json' },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  