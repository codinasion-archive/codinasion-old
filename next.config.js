/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/project/:path*",
        destination: "/projects/:path*",
        permanent: true,
      },
      {
        source: "/programs/:slug*",
        destination: "/program/:slug*",
        permanent: true,
      },
      {
        source: "/contributor",
        destination: "/contributors",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/humans.txt",
        destination: "/api/humans.txt",
      },
    ];
  },
  experimental: {
    appDir: true,
  },
  images: {
    // unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.codinasion.org",
      },
    ],
  },
};

module.exports = nextConfig;
