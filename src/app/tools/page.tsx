import { TagsCard, Tools } from "@/components/Tools";

import Breadcrumb from "@/components/Breadcrump";

import RepoCard from "@/components/RepoCard";

async function getToolsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTagsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools/tags`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ToolsPage() {
  const ToolsData = await getToolsData();
  const TagsData = await getTagsData();

  return (
    <>
      <section className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="px-2">
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
        </div>
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4">
            <Tools toolData={ToolsData} />
          </div>
          <div className="md:col-span-2 mt-6">
            <TagsCard TagsData={TagsData} />
            <RepoCard repo="codinasion/tools" />
          </div>
        </div>
      </section>
    </>
  );
}
