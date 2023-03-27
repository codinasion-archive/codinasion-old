import type { Metadata } from "next";

import type { GoodFirstIssueLabelType } from "@/types";

import { GoodFirstIssueLabels, getGoodFirstIssuesData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";
import GoodFirstIssueCard from "@/components/GoodFirstIssue/GoodFirstIssueCard";
import LabelsCard from "@/components/GoodFirstIssue/LabelsCard";
import GithubRepoCard from "@/components/GithubRepoCard";

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
    )} | Good First Issue`,
  };
}

// Make this page statically generated
export async function generateStaticParams() {
  return GoodFirstIssueLabels.map((labelData: GoodFirstIssueLabelType) => ({
    label: labelData.name,
  }));
}
// End of static generation

export default async function GoodFirstIssueLabelPage({
  params,
}: {
  params: { label: string };
}) {
  const label = params.label;

  const GoodFirstIssuesData = await getGoodFirstIssuesData({
    language_label: label,
  });

  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Good First Issue",
            url: "/good-first-issue",
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
          {GoodFirstIssuesData.map((issue: any) => (
            <GoodFirstIssueCard key={issue.id} GoodFirstIssueData={issue} />
          ))}
        </div>
        <div className="md:col-span-2">
          <LabelsCard />

          {/* @ts-expect-error Async Server Component */}
          <GithubRepoCard full_name="codinasion/program" />
        </div>
      </div>
    </>
  );
}
