import { getServerSideSitemapIndexLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";

import { SiteMetadata } from "@/data";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allToolTagsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tools/tags`
  )
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allToolTagsData.map((tag: any) => {
    sitemapData.push(
      `${SiteMetadata.site_url}/tools/tags/${tag.name.toLowerCase()}`
    );
  });

  return getServerSideSitemapIndexLegacy(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function ToolTagsSitemap() {}
