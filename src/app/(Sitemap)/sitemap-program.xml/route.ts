import { getServerSideSitemapIndex } from "next-sitemap";

import { getProgramData } from "@/data";

import type { ProgramType } from "@/types";

export async function GET(request: Request) {
  const paths: string[] = [];
  const programs = await getProgramData();

  programs.forEach((program: ProgramType) => {
    paths.push(
      `${process.env.NEXT_PUBLIC_CODINASION_URL}/program/${program.slug}`
    );
  });

  return getServerSideSitemapIndex(paths);
}
