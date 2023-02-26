/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://codinasion.org",
  generateRobotsTxt: true,
  exclude: [
    "/program/**",
    "/sitemap-program.xml",
    "/archive/**",
    "/sitemap-archive.xml",
    "/linkfree-og/**",
    "/sitemap-linkfree-og.xml",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${"https://codinasion.org"}/sitemap-program.xml`,
      `${"https://codinasion.org"}/sitemap-archive.xml`,
      `${"https://codinasion.org"}/sitemap-linkfree-og.xml`,
    ],
  },
};

module.exports = config;
