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

export async function getFilteredProgramData(language: string = "c") {
  language = language.toLowerCase();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CODINASION_API_URL}/program/language/${language}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch filtered program data for ${language}`);
  }

  const data = await res.json();

  return data;
}

export async function getProgramDetailData(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_CODINASION_API_URL}/program/${slug}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch program detail data for ${slug}`);
  }

  const data = await res.json();

  return data;
}
