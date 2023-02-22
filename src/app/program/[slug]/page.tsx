import MarkdownPreview from "@/components/MarkdownPreview";
import Comment from "@/components/Comment";
import { AvailableSolutionCard, ContributorsCard } from "@/components/Program";
import Breadcrumb from "@/components/Breadcrump";

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
                  title: "Program",
                  url: "/program",
                },
                {
                  title: slug,
                },
              ]}
            />
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
