import Link from "next/link";

import SiteMetaData from "@/data/SiteMetaData";

type Props = {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
};

export default function CustomLinkComponent({
  href,
  target,
  rel,
  className,
  children,
}: Props) {
  return (
    <>
      {!href.startsWith("/") &&
      !href.startsWith("#") &&
      !href.startsWith(SiteMetaData.site_url) ? (
        <Link
          href={href}
          target={target ? target : "_blank"}
          rel={rel ? rel : "noopener noreferrer"}
          className={className}
        >
          {children}
        </Link>
      ) : (
        <Link
          href={href}
          className={className}
          target={target ? target : "_self"}
          rel={rel ? rel : ""}
        >
          {children}
        </Link>
      )}
    </>
  );
}
