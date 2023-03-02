import { Good1stIssues, TagsCard } from "@/components/Good1stIssue";

import Breadcrumb from "@/components/Breadcrump";

import RepoCard from "@/components/RepoCard";

async function getGood1stIssueData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/good1stissue`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Good1stIssuePage() {
  const Good1stIssueData = await getGood1stIssueData();

  return (
    <>
      <section className="px-4 mx-auto max-w-screen-xl lg:px-6">
        <div className="px-2">
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
        </div>
        <div className="grid md:grid-cols-6 gap-6">
          <div className="md:col-span-4">
            <Good1stIssues Good1stIssueData={Good1stIssueData.issues} />
          </div>
          <div className="md:col-span-2">
            <TagsCard TagsData={Good1stIssueData.labels} />
            <RepoCard repo="codinasion/good-1st-issue" />
          </div>
        </div>
      </section>
    </>
  );
}
