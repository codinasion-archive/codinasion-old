export async function getGithubRepoData(
  full_name: string = "codinasion/program"
) {
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

export async function getGithubAppData(slug: string = "good1stissue") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/apps/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
