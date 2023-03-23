export async function getToolsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getFilteredToolsData(tag = "") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tools/tags/${tag}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getToolTagsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools/tags`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getToolData(slug: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}