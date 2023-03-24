import type { Metadata } from "next";

import type { ToolType, ToolTagType } from "@/types";

import { getFilteredToolsData, getToolTagsData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import ToolCard from "@/components/Tool/ToolCard";
import TagsCard from "@/components/Tool/TagsCard";
import RepoCard from "@/components/RepoCard";

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
    )} | Tools`,
    description:
      "A collection of open source tools, written in TypeScript, that can be used in any JavaScript project.",
  };
}

// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const TagsData = await getToolTagsData();

  return TagsData.slice(0, 1).map((tagData: ToolTagType) => ({
    tag: tagData.name,
  }));
}
// End of static generation

export default async function ToolTagPage({
  params,
}: {
  params: { tag: string };
}) {
  const tag = params.tag;

  // Initiate both requests in parallel
  const getToolsData = getFilteredToolsData(tag);
  const getTagsData = getToolTagsData();

  // Wait for the promises to resolve
  const [ToolsData, TagsData] = await Promise.all([getToolsData, getTagsData]);

  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Tools",
            url: "/tools",
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
          {ToolsData.map((tool: ToolType) => (
            <ToolCard key={tool.title} ToolData={tool} />
          ))}
        </div>
        <div className="md:col-span-2">
          <TagsCard TagsData={TagsData} />

          {/* @ts-expect-error Async Server Component */}
          <RepoCard full_name="codinasion/tools" />
        </div>
      </div>
    </>
  );
}
