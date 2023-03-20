import { FooterLinksType } from "@/types";

const FooterLinks: FooterLinksType[] = [
  {
    title: "Resources",
    links: [
      {
        title: "API",
        url: "https://api.codinasion.org/",
      },
      {
        title: "Projects",
        url: "/projects",
      },
      {
        title: "Contributors",
        url: "/contributors",
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        title: "Program",
        url: "/program",
      },
      {
        title: "Good 1st Issue",
        url: "/good-1st-issue",
      },
      {
        title: "Tools",
        url: "/tools",
      },
    ],
  },
  {
    title: "Quick Links",
    links: [
      {
        title: "sitemap.xml",
        url: "/sitemap.xml",
      },
      {
        title: "robots.txt",
        url: "/robots.txt",
      },
      {
        title: "humans.txt",
        url: "/humans.txt",
      },
    ],
  },
];

export default FooterLinks;
