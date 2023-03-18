export async function getProgramsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/program`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
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
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getProgramTagsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/program/tags`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
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
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
