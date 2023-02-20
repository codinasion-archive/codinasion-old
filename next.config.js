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
  experimental: {
    appDir: true,
  },
  images: {
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
