/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
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
      {
        source: "/good-first-issue/:path*",
        destination: "/good-1st-issue/:path*",
        permanent: true,
      },
      {
        source: "/good-first-issues/:path*",
        destination: "/good-1st-issue/:path*",
        permanent: true,
      },
      {
        source: "/good-1st-issues/:path*",
        destination: "/good-1st-issue/:path*",
        permanent: true,
      },
      {
        source: "/goodfirstissue/:path*",
        destination: "/good-1st-issue/:path*",
        permanent: true,
      },
      {
        source: "/goodfirstissues/:path*",
        destination: "/good-1st-issue/:path*",
        permanent: true,
      },
      {
        source: "/good1stissue/:path*",
        destination: "/good-1st-issue/:path*",
        permanent: true,
      },
      {
        source: "/good1stissues/:path*",
        destination: "/good-1st-issue/:path*",
        permanent: true,
      },
    ];
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
    ],
  },
};

module.exports = nextConfig;
