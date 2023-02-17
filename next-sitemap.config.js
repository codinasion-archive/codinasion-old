/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://codinasion.org",
  generateRobotsTxt: true,
  exclude: ["/program/**", "/sitemap-program.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [`${"https://codinasion.org"}/sitemap-program.xml`],
  },
};

module.exports = config;
