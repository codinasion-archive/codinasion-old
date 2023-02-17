import MarkdownPreview from "@/skeletons/MarkdownPreview";
import { AvailableSolutionCard, ContributorsCard } from "@/skeletons/Program";

export default async function Loading() {
  return (
    <>
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="md:col-span-4">
            <MarkdownPreview />
          </div>
          <div className="md:col-span-2">
            <AvailableSolutionCard />
            <ContributorsCard />
          </div>
        </div>
      </section>
    </>
  );
}
