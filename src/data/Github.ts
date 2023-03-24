export async function getRepoData(full_name: string = "codinasion/program") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/${full_name}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
