type NavbarLinkType = {
  title: string;
  url: string;
};

type NavbarLinksType = NavbarLinkType[];

const NavbarLinks: NavbarLinksType = [
  {
    title: "API",
    url: "/api",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export default NavbarLinks;

export type { NavbarLinkType, NavbarLinksType };
