import type { ProgramType } from "@/types";

import { ProgramCard, TagsCard } from "@/components/Program";

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
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4">
            {ProgramsData.map((ProgramData: ProgramType) => (
              <ProgramCard key={ProgramData.slug} ProgramData={ProgramData} />
            ))}
          </div>
          <div className="md:col-span-2">
            <TagsCard TagsData={TagsData} />
          </div>
        </div>
      </section>
    </>
  );
}
