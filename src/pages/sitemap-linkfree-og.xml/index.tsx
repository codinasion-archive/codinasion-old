import { getServerSideSitemapIndex } from "next-sitemap";
import { GetServerSideProps } from "next";
import SiteMetaData from "@/data/SiteMetaData";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allLinkFreeUsers = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/linkfree-og/users/`,
    {
      method: "GET",
    }
  )
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allLinkFreeUsers.map((user: any) => {
    sitemapData.push(`${SiteMetaData.site_url}/linkfree-og/${user}`);
  });

  return getServerSideSitemapIndex(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function LinkFreeOGSitemap() {}
