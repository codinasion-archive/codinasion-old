import Link from "@/components/Link";

import { BiBookBookmark } from "react-icons/bi";

import LanguageTag from "./LanguageTag";

import type { Good1stIssueType } from "@/types";

export default function Good1stIssueCard({
  Good1stIssueData,
}: {
  Good1stIssueData: Good1stIssueType;
}) {
  return (
    <>
      <Link
        href={Good1stIssueData.issue_url}
        className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
        externalIcon={false}
      >
        <h5 className="text-xl md:text-2xl font-bold tracking-tight">
          {Good1stIssueData.issue_title}
        </h5>
        <div className="mt-4 md:flex">
          <div>
            <BiBookBookmark className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-sm">
              <b>{Good1stIssueData.issue_short_url}</b>
            </span>
          </div>
        </div>
        <div className="pt-4 flex flex-wrap">
          {Good1stIssueData.issue_labels.map((label) => (
            <LanguageTag key={label} tag={label} />
          ))}
        </div>
      </Link>
    </>
  );
}
