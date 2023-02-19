import MarkdownPreview from "@/components/MarkdownPreview";
import Comment from "@/components/Comment";
import { AvailableSolutionCard, ContributorsCard } from "@/components/Program";

async function getProgramData(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/program/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProgramPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const ProgramData = await getProgramData(slug);

  return (
    <>
      <section className="py-8 px-4 mx-auto lg:py-16 lg:px-6">
        <div className="grid md:grid-cols-6 md:gap-8 sm:gap-4 sm:grid-cols-1">
          <div className="md:col-span-4">
            <MarkdownPreview>{ProgramData.markdown}</MarkdownPreview>
            <div className="my-10">
              <Comment />
            </div>
          </div>
          <div className="md:col-span-2">
            <AvailableSolutionCard
              tags={ProgramData.tags}
              trackId={ProgramData.trackId}
            />
            <ContributorsCard contributors={ProgramData.contributors} />
          </div>
        </div>
      </section>
    </>
  );
}
