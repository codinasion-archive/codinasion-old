import { getServerSideSitemapIndexLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";

import { SiteMetadata } from "@/data";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allProgramsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/program/`
  )
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allProgramsData.map((program: any) => {
    sitemapData.push(`${SiteMetadata.site_url}/program/${program.slug}`);
  });

  return getServerSideSitemapIndexLegacy(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function ProgramSitemap() {}
