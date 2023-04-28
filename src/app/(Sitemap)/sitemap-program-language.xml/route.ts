import { getServerSideSitemapIndex } from "next-sitemap";

import { getProgramLanguageData, getFilteredProgramData } from "@/data";

import type { ProgramType, ProgramLanguageType } from "@/types";

export async function GET(request: Request) {
  const paths: string[] = [];
  const languages: ProgramLanguageType[] = await getProgramLanguageData();

  for (const language of languages) {
    paths.push(
      `${
        process.env.NEXT_PUBLIC_CODINASION_URL
      }/program/language/${language.name
        .toLowerCase()
        .replace(/#/g, "-sharp")
        .replace(/\+/g, "-plus")}`
    );

    const programs = await getFilteredProgramData(
      language.name
        .toLowerCase()
        .replace(/#/g, "-sharp")
        .replace(/\+/g, "-plus")
    );

    programs.forEach((program: ProgramType) => {
      paths.push(
        `${
          process.env.NEXT_PUBLIC_CODINASION_URL
        }/program/language/${language.name
          .toLowerCase()
          .replace(/#/g, "-sharp")
          .replace(/\+/g, "-plus")}/${program.slug}`
      );
    });
  }

  return getServerSideSitemapIndex(paths);
}
