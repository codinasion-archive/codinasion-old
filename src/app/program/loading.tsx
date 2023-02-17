import { ProgramCard, TagsCard } from "@/skeletons/Program";

export default async function Loading() {
  return (
    <>
      <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <ProgramCard key={index} />
              ))}
          </div>
          <div className="md:col-span-2">
            <TagsCard />
          </div>
        </div>
      </section>
    </>
  );
}
