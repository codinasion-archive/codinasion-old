import type { ToolType } from "@/types";

import { getToolsData, getToolTagsData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import ToolCard from "@/components/Tool/ToolCard";
import TagsCard from "@/components/Tool/TagsCard";
import RepoCard from "@/components/RepoCard";

export const metadata = {
  title: "Tool",
  description:
    "A collection of open source tools, written in TypeScript, that can be used in any JavaScript project.",
};

export default async function ToolPage() {
  // Initiate both requests in parallel
  const GetToolsData = await getToolsData();
  const GetTagsData = await getToolTagsData();

  // Wait for the promises to resolve
  const [ToolsData, TagsData] = await Promise.all([GetToolsData, GetTagsData]);

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
