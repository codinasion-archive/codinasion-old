export async function getProgramsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/program`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch program data => " + res.json());
  }

  return res.json();
}

export async function getFilteredProgramsData(tag = "") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/program/tags/${tag}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch filtered program data => " + res.json());
  }

  return res.json();
}

export async function getProgramTagsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/program/tags`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch program tags data => " + res.json());
  }

  return res.json();
}

export async function getProgramData(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/program/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch program slug data => " + res.json());
  }

  return res.json();
}
