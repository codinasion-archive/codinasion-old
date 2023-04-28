const siteUrl = process.env.NEXT_PUBLIC_CODINASION_URL;

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: siteUrl,
  generateRobotsTxt: true,
  exclude: [
    "/program/**",
    //
    "/sitemap-program.xml",
    "/sitemap-program-language.xml",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${siteUrl}/sitemap-program.xml`,
      `${siteUrl}/sitemap-program-language.xml`,
    ],
  },
};

module.exports = config;
