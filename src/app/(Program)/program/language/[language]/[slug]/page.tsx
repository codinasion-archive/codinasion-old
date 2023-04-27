import type { Metadata } from "next";

import { getFilteredProgramData, getProgramDetailData } from "@/data";

import { ProgramType, ProgramDetailType } from "@/types";

import Breadcrumb from "@/components/Breadcrumb";
import ProgramDetail from "@/components/Program/ProgramDetail";
import AvailableSolutionCard from "@/components/Program/AvailableSolutionCard";
import ContributorsCard from "@/components/Program/ContributorsCard";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: {
    language: string;
    slug: string;
  };
}): Promise<Metadata> {
  const language = params.language;
  const slug = params.slug;
  return {
    title: `${slug
      .replace(/\-/g, " ")
      .replace(/\w\S*/g, (w) =>
        w.replace(/^\w/, (c) => c.toUpperCase())
      )} | ${language
      .replace(/\-sharp/g, "#")
      .replace(/\-plus/g, "+")
      .replace(/\w\S*/g, (w) =>
        w.replace(/^\w/, (c) => c.toUpperCase())
      )} | Program`,
    description: `Write a ${language
      .replace(/\-sharp/g, "#")
      .replace(/\-plus/g, "+")} program to ${slug.replace(/\-/g, " ")}.`,
  };
}
// End of metadata generation
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams({
  params: { language },
}: {
  params: { language: string };
}) {
  const ProgramData = await getFilteredProgramData(language);

  return ProgramData.slice(0, 1).map((program: ProgramType) => ({
    slug: program.slug,
  }));
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function ProgramDetailPage({
  params,
}: {
  params: {
    language: string;
    slug: string;
  };
}) {
  const language = params.language;
  const slug = params.slug;

  const ProgramData: ProgramDetailType = await getProgramDetailData(slug);

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
            title: "Language",
            url: `/program/language/`,
          },
          {
            title: language
              .replace(/\-sharp/g, "#")
              .replace(/\-plus/g, "+")
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              ),
            url: `/program/language/${language}`,
          },
          {
            title: slug
              .replace(/\-/g, " ")
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              ),
          },
        ]}
      />

      {/* Main */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          <ProgramDetail ProgramData={ProgramData} language={language} />
        </div>
        <div className="md:col-span-2">
          <AvailableSolutionCard ProgramData={ProgramData} />
          <ContributorsCard ProgramData={ProgramData} />
        </div>
      </div>
    </>
  );
}
