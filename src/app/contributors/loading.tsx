import { ContributorCard } from "@/skeletons/Contributors";

export default async function Loading() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-md text-center my-10 lg:mb-12">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold">
            Our Awesome Community 💖
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-4">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <ContributorCard key={index} />
            ))}
        </div>
      </section>
    </>
  );
}
