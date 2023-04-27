import type { Metadata } from "next";

import type { ProgramType, ProgramLanguageType } from "@/types";

import { getFilteredProgramData, getProgramLanguageData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import ProgramCard from "@/components/Program/ProgramCard";
import ProgramLanguageCard from "@/components/Program/ProgramLanguageCard";

import Comment from "@/components/Comment";

////////////////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/api-reference/metadata#generatemetadata-function
// Generate metadata for this page
export async function generateMetadata({
  params,
}: {
  params: { language: string };
}): Promise<Metadata> {
  const language = params.language;
  return {
    title: `${language
      .replace(/\-sharp/g, "#")
      .replace(/\-plus/g, "+")
      .replace(/\w\S*/g, (w) =>
        w.replace(/^\w/, (c) => c.toUpperCase())
      )} | Language | Program`,
    description: "An open-source codebase for sharing programming solutions.",
  };
}
// End of metadata generation
////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
// https://beta.nextjs.org/docs/data-fetching/generating-static-params
// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const ProgramLanguageData = await getProgramLanguageData();

  return ProgramLanguageData.slice(0, 1).map(
    (language: ProgramLanguageType) => ({
      language: language.name,
    })
  );
}
// End of static generation
//////////////////////////////////////////////////////////////////////

export default async function ProgramLanguagePage({
  params,
}: {
  params: { language: string };
}) {
  const language = params.language;
  /////////////////////////////////////////////////////////////////////////////
  // https://beta.nextjs.org/docs/data-fetching/fetching#parallel-data-fetching
  // Initiate both requests in parallel
  const ProgramDataLoad = getFilteredProgramData(language);
  const ProgramLanguageDataLoad = getProgramLanguageData();

  // Wait for the promises to resolve
  const [ProgramData, ProgramLanguageData] = await Promise.all([
    ProgramDataLoad,
    ProgramLanguageDataLoad,
  ]);
  /////////////////////////////////////////////////////////////////////////////

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
            url: "/program/language",
          },
          {
            title: language
              .replace(/\-sharp/g, "#")
              .replace(/\-plus/g, "+")
              .replace(/\w\S*/g, (w) =>
                w.replace(/^\w/, (c) => c.toUpperCase())
              ),
          },
        ]}
      />

      {/* Main */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          {ProgramData.length > 0 ? (
            ProgramData.slice(0, 4).map((program: ProgramType) => (
              <ProgramCard
                key={program.id}
                ProgramData={program}
                language={language}
              />
            ))
          ) : (
            <div className="text-gray-500 dark:text-gray-400 text-lg font-medium py-5">
              No programs found for {language}.
            </div>
          )}

          <Comment />
        </div>
        <div className="md:col-span-2">
          <ProgramLanguageCard languages={ProgramLanguageData} />
        </div>
      </div>
    </>
  );
}
