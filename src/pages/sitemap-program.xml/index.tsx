import { getServerSideSitemapIndex } from "next-sitemap";
import { GetServerSideProps } from "next";
import SiteMetaData from "@/data/SiteMetaData";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allProgramsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/program/`,
    {
      method: "GET",
    }
  )
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allProgramsData.map((program: any) => {
    sitemapData.push(`${SiteMetaData.site_url}/program/${program.slug}`);
  });

  return getServerSideSitemapIndex(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function ProgramSitemap() {}
