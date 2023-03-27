import { getLanguageData } from "@codinasion/language";

export const GoodFirstIssueLabels = [
  {
    name: "C",
    logo: getLanguageData({
      name: "C",
    })[0].logo,
  },
  {
    name: "Dart",
    logo: getLanguageData({
      name: "Dart",
    })[0].logo,
  },
  {
    name: "Go",
    logo: getLanguageData({
      name: "Go",
    })[0].logo,
  },
  {
    name: "Java",
    logo: getLanguageData({
      name: "Java",
    })[0].logo,
  },
  {
    name: "JavaScript",
    logo: getLanguageData({
      name: "JavaScript",
    })[0].logo,
  },
  {
    name: "Julia",
    logo: getLanguageData({
      name: "Julia",
    })[0].logo,
  },
  {
    name: "Kotlin",
    logo: getLanguageData({
      name: "Kotlin",
    })[0].logo,
  },
  {
    name: "Perl",
    logo: getLanguageData({
      name: "Perl",
    })[0].logo,
  },
  {
    name: "PHP",
    logo: getLanguageData({
      name: "PHP",
    })[0].logo,
  },
  {
    name: "Python",
    logo: getLanguageData({
      name: "Python",
    })[0].logo,
  },
  {
    name: "R",
    logo: getLanguageData({
      name: "R",
    })[0].logo,
  },
  {
    name: "Ruby",
    logo: getLanguageData({
      name: "Ruby",
    })[0].logo,
  },
  {
    name: "Rust",
    logo: getLanguageData({
      name: "Rust",
    })[0].logo,
  },
  {
    name: "Scala",
    logo: getLanguageData({
      name: "Scala",
    })[0].logo,
  },
  {
    name: "Swift",
    logo: getLanguageData({
      name: "Swift",
    })[0].logo,
  },
  {
    name: "TypeScript",
    logo: getLanguageData({
      name: "TypeScript",
    })[0].logo,
  },
];

export async function getGoodFirstIssuesData({
  page_number = 1,
  per_page = 100,
  language_label = GoodFirstIssueLabels.map((label) => label.name).join(","),
}: {
  page_number?: number;
  per_page?: number;
  language_label?: string;
}) {
  // Github serach API
  const GithubSearchUrl = `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/search/issues?q=is%3Aissue+is%3Aopen+sort%3Acreated-desc+label%3A%22good+first+issue%22+label%3A${language_label}+no%3Aassignee&per_page=${per_page}&page=${page_number}`;

  const res = await fetch(GithubSearchUrl, {
    next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch 'Good First Issue' data for page_number '${page_number}'`
    );
  }

  return res.json().then((data) => {
    return data.items;
  });
}
