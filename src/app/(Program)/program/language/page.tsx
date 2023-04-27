import { getProgramLanguageData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import ProgramLanguageCard from "@/components/Program/ProgramLanguageCard";

import Comment from "@/components/Comment";

export const metadata = {
  title: "Program",
  description: "An open-source codebase for sharing programming solutions.",
};

export default async function ProgramLanguageHomePage() {
  const ProgramLanguageData = await getProgramLanguageData();

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
          },
        ]}
      />

      {/* Main */}
      <div className="grid">
        <ProgramLanguageCard languages={ProgramLanguageData} />

        <Comment />
      </div>
    </>
  );
}
