import { getServerSideSitemapIndexLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";

import { SiteMetadata } from "@/data";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allProgramTagsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/program/tags/`
  )
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allProgramTagsData.map((tag: any) => {
    sitemapData.push(
      `${SiteMetadata.site_url}/program/tags/${tag.name.toLowerCase()}`
    );
  });

  return getServerSideSitemapIndexLegacy(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function ProgramTagsSitemap() {}
