import { getServerSideSitemapIndex } from "next-sitemap";
import { GetServerSideProps } from "next";
import SiteMetaData from "@/data/SiteMetaData";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allArchiveUsers = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/archive/users/`,
    {
      method: "GET",
    }
  )
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allArchiveUsers.map((archive_user: any) => {
    sitemapData.push(`${SiteMetaData.site_url}/archive/${archive_user.login}`);
  });

  return getServerSideSitemapIndex(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function ArchiveSitemap() {}
