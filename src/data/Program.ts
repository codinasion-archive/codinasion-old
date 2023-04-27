export async function getProgramData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CODINASION_API_URL}/program`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch program data");
  }

  const data = await res.json();

  return data;
}

export async function getProgramLanguageData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CODINASION_API_URL}/program/language`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch program language data");
  }

  const data = await res.json();

  return data;
}
