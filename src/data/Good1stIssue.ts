export async function getGood1stIssuesData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/good-1st-issue`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch fgi data => " + res.json());
  }

  return res.json();
}

export async function getFilteredGood1stIssuesData(label = "") {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/good-1st-issue/labels/${label}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch filtered gfi data => " + res.json());
  }

  return res.json();
}

export async function getGood1stIssueLabelsData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/good-1st-issue/labels`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch gfi labels data => " + res.json());
  }

  return res.json();
}
