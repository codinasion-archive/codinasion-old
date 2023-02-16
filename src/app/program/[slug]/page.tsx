import MarkdownPreview from "@/components/MarkdownPreview";

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
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4">
            <MarkdownPreview>{ProgramData.markdown}</MarkdownPreview>
          </div>
          <div className="md:col-span-2">There</div>
        </div>
      </section>
    </>
  );
}
