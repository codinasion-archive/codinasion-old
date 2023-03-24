/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://codinasion.org",
  generateRobotsTxt: true,
  exclude: [
    "/program/**",
    "/sitemap-program.xml",
    "/program/tags/**",
    "/sitemap-program-tags.xml",
    "/good-1st-issue/labels/**",
    "/sitemap-good-1st-issue-labels.xml",
    "/tools/**",
    "/sitemap-tools.xml",
    "/tools/tags/**",
    "/sitemap-tools-tags.xml",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${"https://codinasion.org"}/sitemap-program.xml`,
      `${"https://codinasion.org"}/sitemap-program-tags.xml`,
      `${"https://codinasion.org"}/sitemap-good-1st-issue-labels.xml`,
      `${"https://codinasion.org"}/sitemap-tools.xml`,
      `${"https://codinasion.org"}/sitemap-tools-tags.xml`,
    ],
  },
};

module.exports = config;
