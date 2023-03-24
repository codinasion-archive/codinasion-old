import type { Good1stIssueType } from "@/types";

import { getGood1stIssuesData, getGood1stIssueLabelsData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import Good1stIssueCard from "@/components/Good1stIssue/Good1stIssueCard";
import LabelsCard from "@/components/Good1stIssue/LabelsCard";
import RepoCard from "@/components/RepoCard";

export const metadata = {
  title: "Good 1st Issue",
  description: "Find good first issues to contribute to open source.",
};

export default async function Good1stIssuePage() {
  // Initiate both requests in parallel
  const Good1stIssuesData = getGood1stIssuesData();
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
          },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          {IssueData.map((issue: Good1stIssueType) => (
            <Good1stIssueCard
              key={issue.issue_title}
              Good1stIssueData={issue}
            />
          ))}
        </div>
        <div className="md:col-span-2">
          <LabelsCard LabelsData={LabelsData} />

          {/* @ts-expect-error Async Server Component */}
          <RepoCard full_name="codinasion/good-1st-issue" />
        </div>
      </div>
    </>
  );
}
