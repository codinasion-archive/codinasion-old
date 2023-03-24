import type { Metadata } from "next";

import { getToolData, getToolTagsData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import MarkdownPreview from "@/components/MarkdownPreview";
import Comment from "@/components/Comment";
import AvailableTagsCard from "@/components/Tool/AvailableTagsCard";
import TagsCard from "@/components/Tool/TagsCard";
import RepoCard from "@/components/RepoCard";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  const ToolData = await getToolData(slug);

  return {
    title: ToolData.title,
    description: ToolData.description,
  };
}

export default async function ToolDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;

  // Initiate both requests in parallel
  const GetToolData = await getToolData(slug);
  const getTagsData = await getToolTagsData();

  // Wait for the promises to resolve
  const [ToolData, TagsData] = await Promise.all([GetToolData, getTagsData]);

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
            title: ToolData.title,
          },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          <MarkdownPreview>{`# ${ToolData.title}`}</MarkdownPreview>
          <MarkdownPreview>{`### Source Code
${ToolData.source_code}`}</MarkdownPreview>
          <MarkdownPreview>{`---`}</MarkdownPreview>
          <MarkdownPreview>{ToolData.markdown}</MarkdownPreview>
          <div className="my-10">
            <Comment />
          </div>
        </div>
        <div className="md:col-span-2">
          <AvailableTagsCard tags={ToolData.tags} />

          {/* @ts-expect-error Async Server Component */}
          <RepoCard full_name="codinasion/tools" />

          <TagsCard TagsData={TagsData} />
        </div>
      </div>
    </>
  );
}
