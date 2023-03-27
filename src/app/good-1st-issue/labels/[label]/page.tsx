import type { Metadata } from "next";

import type { Good1stIssueType, Good1stIssueLabelType } from "@/types";

import {
  getFilteredGood1stIssuesData,
  getGood1stIssueLabelsData,
} from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import Good1stIssueCard from "@/components/Good1stIssue/Good1stIssueCard";
import LabelsCard from "@/components/Good1stIssue/LabelsCard";
import GithubRepoCard from "@/components/GithubRepoCard";
import GithubAppCard from "@/components/GithubAppCard";

export async function generateMetadata({
  params,
}: {
  params: { label: string };
}): Promise<Metadata> {
  const label = params.label;
  return {
    title: `${label.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1)
    )} | Good 1st Issue`,
    description: "Find good first issues to contribute to open source.",
  };
}

// Make this page statically generated, with dynamic params
export const dynamicParams = true;
export async function generateStaticParams() {
  const Good1stIssuesLabelsData = await getGood1stIssueLabelsData();

  if (Good1stIssuesLabelsData) {
    return Good1stIssuesLabelsData.slice(0, 1).map(
      (labelData: Good1stIssueLabelType) => ({
        label: labelData.label,
      })
    );
  } else {
    return [];
  }
}
// End of static generation

export default async function Good1stIssueLabelPage({
  params,
}: {
  params: { label: string };
}) {
  const label = params.label;

  // Initiate both requests in parallel
  const Good1stIssuesData = getFilteredGood1stIssuesData(label);
  const Good1stIssuesLabelsData = getGood1stIssueLabelsData();

  // Wait for the promises to resolve
  const [IssueData, LabelsData] = await Promise.all([
    Good1stIssuesData,
    Good1stIssuesLabelsData,
  ]);

  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Good 1st Issue",
            url: "/good-1st-issue",
          },
          {
            title: "Labels",
          },
          {
            title: label.replace(
              /\w\S*/g,
              (txt) => txt.charAt(0).toUpperCase() + txt.substr(1)
            ),
          },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          {IssueData &&
            IssueData.map((Good1stIssue: Good1stIssueType) => (
              <Good1stIssueCard
                key={Good1stIssue.issue_title}
                Good1stIssueData={Good1stIssue}
              />
            ))}
        </div>
        <div className="md:col-span-2">
          <LabelsCard LabelsData={LabelsData} />

          {/* @ts-expect-error Async Server Component */}
          <GithubRepoCard full_name="codinasion/good-1st-issue" />

          {/* @ts-expect-error Async Server Component */}
          <GithubAppCard slug="good1stissue" />
        </div>
      </div>
    </>
  );
}
