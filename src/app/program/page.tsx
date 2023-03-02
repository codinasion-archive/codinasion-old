import { TagsCard } from "@/components/Program";

import { Programs } from "@/components/Program";
import Breadcrumb from "@/components/Breadcrump";

import RepoCard from "@/components/RepoCard";

async function getProgramsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/programs`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTagsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/programs/tags`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProgramPage() {
  const ProgramsData = await getProgramsData();
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
                title: "Program",
              },
            ]}
          />
        </div>
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4">
            <Programs programData={ProgramsData} />
          </div>
          <div className="md:col-span-2">
            <TagsCard TagsData={TagsData} />
            <RepoCard repo="codinasion/program" />
          </div>
        </div>
      </section>
    </>
  );
}
