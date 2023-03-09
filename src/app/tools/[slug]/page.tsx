import MarkdownPreview from "@/components/MarkdownPreview";
import Comment from "@/components/Comment";
import { AvailableTagsCard } from "@/components/Tools";
import Breadcrumb from "@/components/Breadcrump";
import RepoCard from "@/components/RepoCard";

async function getToolData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ToolPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const ToolData = await getToolData(slug);

  return (
    <>
      <section className="px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-8">
          <div className="md:col-span-4">
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
                  title: slug,
                },
              ]}
            />
            <MarkdownPreview>
              {ToolData &&
                ToolData.markdown &&
                ToolData.markdown.split("\n\n")[0]}
            </MarkdownPreview>
            <hr className="my-4 border-gray-200 dark:border-gray-500" />
            <MarkdownPreview>{ToolData.source_code}</MarkdownPreview>
            <hr className="my-4 border-gray-200 dark:border-gray-500" />
            <MarkdownPreview>
              {ToolData &&
                ToolData.markdown &&
                ToolData.markdown.replace(
                  ToolData.markdown.split("\n\n")[0],
                  ""
                )}
            </MarkdownPreview>
            <hr className="my-4 border-gray-200 dark:border-gray-500" />
            <div className="my-10">
              <Comment />
            </div>
          </div>
          <div className="md:col-span-2 mt-6">
            <AvailableTagsCard tags={ToolData.tags} />
            <RepoCard repo="codinasion/tools" />
          </div>
        </div>
      </section>
    </>
  );
}
