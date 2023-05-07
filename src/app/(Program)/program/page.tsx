import type { ProgramType } from "@/types";

import { getProgramData, getProgramLanguageData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import ProgramCard from "@/components/Program/ProgramCard";
import ProgramLanguageCard from "@/components/Program/ProgramLanguageCard";

import Comment from "@/components/Comment";

import Sponsor from "@/components/Sponsor";

export const metadata = {
  title: "Program",
  description: "An open-source codebase for sharing programming solutions.",
};

export default async function ProgramPage() {
  /////////////////////////////////////////////////////////////////////////////
  // https://beta.nextjs.org/docs/data-fetching/fetching#parallel-data-fetching
  // Initiate both requests in parallel
  const ProgramDataLoad = getProgramData();
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
          },
        ]}
      />

      {/* Main */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          {ProgramData.map((program: ProgramType) => (
            <ProgramCard key={program.id} ProgramData={program} />
          ))}

          <Comment />
        </div>
        <div className="md:col-span-2">
          <ProgramLanguageCard languages={ProgramLanguageData} />

          <div className="sticky top-0 py-2">
            <Sponsor />
          </div>
        </div>
      </div>
    </>
  );
}
