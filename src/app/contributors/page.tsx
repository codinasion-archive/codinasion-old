import { ContributorCard } from "@/components/Contributors";
import type { ContributorType } from "@/types/Contributors";

async function getContributorsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contributors`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ContributorsPage() {
  const contributors = await getContributorsData();

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-md text-center my-10 lg:mb-12">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold">
            Our Awesome Community 💖
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-4">
          {contributors.map((contributor: ContributorType) => (
            <ContributorCard key={contributor.id} contributor={contributor} />
          ))}
        </div>
      </section>
    </>
  );
}
