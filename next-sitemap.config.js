/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://codinasion.org",
  generateRobotsTxt: true,
  exclude: [
    "/program/**",
    "/sitemap-program.xml",
    "/archive/**",
    "/sitemap-archive.xml",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${"https://codinasion.org"}/sitemap-program.xml`,
      `${"https://codinasion.org"}/sitemap-archive.xml`,
    ],
  },
};

module.exports = config;
