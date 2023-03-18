import type { Metadata } from "next";

import type { ProgramType } from "@/types";

import { getFilteredProgramsData, getProgramTagsData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import ProgramCard from "@/components/Program/ProgramCard";
import LanguageCard from "@/components/Program/LanguageCard";

export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  const tag = params.tag;
  return {
    title: `${tag.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1)
    )} | Programs`,
    description: "An open-source codebase for sharing programming solutions.",
  };
}

export default async function ProgramTagPage({
  params,
}: {
  params: { tag: string };
}) {
  const tag = params.tag;

  const ProgramsData = await getFilteredProgramsData(tag);
  const TagsData = await getProgramTagsData();

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
            title: "Tags",
          },
          {
            title: tag.replace(
              /\w\S*/g,
              (txt) => txt.charAt(0).toUpperCase() + txt.substr(1)
            ),
          },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          {ProgramsData.map((program: ProgramType) => (
            <ProgramCard key={program.title} ProgramData={program} />
          ))}
        </div>
        <div className="md:col-span-2">
          <LanguageCard TagsData={TagsData} />
        </div>
      </div>
    </>
  );
}
