import type { Metadata } from "next";

import type { ProgramType } from "@/types";

import {
  getProgramData,
  getProgramTagsData,
  getProgramsData,
  SiteMetadata,
} from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import MarkdownPreview from "@/components/MarkdownPreview";
import Comment from "@/components/Comment";
import AvailableSolutionCard from "@/components/Program/AvailableSolutionCard";
import ContributorsCard from "@/components/Program/ContributorsCard";
import GithubRepoCard from "@/components/GithubRepoCard";
import LanguageCard from "@/components/Program/LanguageCard";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const ProgramData = await getProgramData(slug);

  return {
    title: ProgramData.title,
    description: `Write a program to ${ProgramData.title.toLowerCase()}`,

    // Open Graph
    openGraph: {
      title: ProgramData.title,
      description: `Write a program to ${ProgramData.title.toLowerCase()}`,
      url: `${SiteMetadata.site_url}/program/${slug}`,
      siteName: SiteMetadata.title,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}/og?path=/program/${slug}`,
          width: 1200,
          height: 630,
          alt: ProgramData.title,
        },
      ],
      locale: "en-US",
      type: "website",
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: ProgramData.title,
      description: `Write a program to ${ProgramData.title.toLowerCase()}`,
      siteId: SiteMetadata.twitter_userid,
      creator: SiteMetadata.twitter_username,
      creatorId: SiteMetadata.twitter_userid,
      images: [`${process.env.NEXT_PUBLIC_API_URL}/og?path=/program/${slug}`],
    },
  };
}

// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const ProgramsData = await getProgramsData();

  return ProgramsData.slice(0, 1).map((programData: ProgramType) => ({
    slug: programData.slug,
  }));
}
// End of static generation

export default async function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Initiate both requests in parallel
  const GetProgramData = getProgramData(slug);
  const GetTagsData = getProgramTagsData();

  // Wait for the promises to resolve
  const [ProgramData, TagsData] = await Promise.all([
    GetProgramData,
    GetTagsData,
  ]);

  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Program",
            url: "/program",
          },
          {
            title: ProgramData.title,
          },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          <MarkdownPreview>{ProgramData.markdown}</MarkdownPreview>
          <div className="my-10">
            <Comment />
          </div>
        </div>
        <div className="md:col-span-2">
          <AvailableSolutionCard
            tags={ProgramData.tags}
            trackId={ProgramData.trackId}
          />

          <ContributorsCard contributors={ProgramData.contributors} />

          {/* @ts-expect-error Async Server Component */}
          <GithubRepoCard full_name="codinasion/program" />

          <LanguageCard TagsData={TagsData} />
        </div>
      </div>
    </>
  );
}
