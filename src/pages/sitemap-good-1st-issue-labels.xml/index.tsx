import { getServerSideSitemapIndexLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";

import { SiteMetadata } from "@/data";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const sitemapData: string[] = [];
  const allGood1stIssueLabelsData = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/good-1st-issue/labels/`
  )
    .then((res: any) => res.json())
    .catch((error) => console.log(error));

  allGood1stIssueLabelsData.map((label: any) => {
    sitemapData.push(
      `${
        SiteMetadata.site_url
      }/good-1st-issue/labels/${label.label.toLowerCase()}`
    );
  });

  return getServerSideSitemapIndexLegacy(ctx, sitemapData);
};

// Default export to prevent next.js errors
export default function Good1stIssueLabelsSitemap() {}
