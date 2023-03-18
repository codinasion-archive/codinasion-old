export async function getContributorsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contributors`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
