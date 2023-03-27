import { getGoodFirstIssuesData } from "@/data";

import Breadcrumb from "@/components/Breadcrumb";

import GoodFirstIssueCard from "@/components/GoodFirstIssue/GoodFirstIssueCard";
import LabelsCard from "@/components/GoodFirstIssue/LabelsCard";

export const metadata = {
  title: "Good First Issue",
  description: "Find good first issues to contribute to open source.",
};

export default async function GoodFirstIssuePage() {
  const GoodFirstIssuesData = await getGoodFirstIssuesData({
    per_page: 10,
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
        </div>
      </div>
    </>
  );
}
