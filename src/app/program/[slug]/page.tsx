import type { Metadata } from "next";

import { getProgramData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import MarkdownPreview from "@/components/MarkdownPreview";
import Comment from "@/components/Comment";
import AvailableSolutionCard from "@/components/Program/AvailableSolutionCard";
import ContributorsCard from "@/components/Program/ContributorsCard";

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
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_API_URL}/og?path=/program/${slug}`,
          width: 1200,
          height: 630,
          alt: ProgramData.title,
        },
      ],
    },

    // Twitter Card
    twitter: {
      title: ProgramData.title,
      description: `Write a program to ${ProgramData.title.toLowerCase()}`,
      images: [`${process.env.NEXT_PUBLIC_API_URL}/og?path=/program/${slug}`],
    },
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  const ProgramData = await getProgramData(slug);

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
        </div>
      </div>
    </>
  );
}
