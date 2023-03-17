import type { ProgramType } from "@/types";

import { getProgramsData, getProgramTagsData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import ProgramCard from "@/components/Program/ProgramCard";
import LanguageCard from "@/components/Program/LanguageCard";

export const metadata = {
  title: "Program",
  description: "An open-source codebase for sharing programming solutions.",
};

export default async function ProgramPage() {
  const ProgramsData = await getProgramsData();
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
