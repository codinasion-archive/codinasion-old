import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contributors from "@/components/Contributors";

async function getContributorsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contributors`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function HomePage() {
  const contributors = await getContributorsData();

  return (
    <>
      <Hero />
      <Contributors contributors={contributors} />
      <Projects max={3} />
    </>
  );
}
