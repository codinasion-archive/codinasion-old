import { getServerSideSitemapIndexLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";

import { SiteMetadata } from "@/data";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allToolsData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools`)
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allToolsData.map((tool: any) => {
    sitemapData.push(`${SiteMetadata.site_url}/tools/${tool.slug}`);
  });

  return getServerSideSitemapIndexLegacy(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function ToolsSitemap() {}
