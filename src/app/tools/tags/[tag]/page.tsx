import type { Metadata } from "next";

import type { ToolType } from "@/types";

import { getFilteredToolsData, getToolTagsData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import ToolCard from "@/components/Tool/ToolCard";
import TagsCard from "@/components/Tool/TagsCard";

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

export default async function ToolTagPage({
  params,
}: {
  params: { tag: string };
}) {
  const tag = params.tag;

  // Initiate both requests in parallel
  const getToolsData = await getFilteredToolsData(tag);
  const getTagsData = await getToolTagsData();

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
        </div>
      </div>
    </>
  );
}
