type FooterLinkType = {
  title: string;
  url: string;
};

type FooterLinksType = {
  title: string;
  links: FooterLinkType[];
};

const FooterLinks: FooterLinksType[] = [
  {
    title: "Resources",
    links: [
      {
        title: "Blog",
        url: "/blog",
      },
    ],
  },
  {
    title: "Projects",
    links: [
      {
        title: "Archive",
        url: "/archive",
      },
    ],
  },
  {
    title: "Misc",
    links: [
      {
        title: "About",
        url: "/about",
      },
    ],
  },
];

export default FooterLinks;

export type { FooterLinkType, FooterLinksType };
