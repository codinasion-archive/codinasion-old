import type { Good1stIssueTagType } from "@/types";

export default function LanguageCountTag({
  tag = {
    label: "C",
    issue_count: 1,
  },
}: {
  tag: Good1stIssueTagType;
}) {
  return (
    <>
      <div className="m-1">
        <span className="bg-green-200 dark:bg-green-300 text-sm text-gray-700 p-1 rounded-l-md focus:bg-white">
          <b>{tag.label}</b>
        </span>
        <span className="bg-blue-200 dark:bg-blue-400 text-sm text-gray-700 p-1 rounded-r-md">
          <b>{tag.issue_count}</b>
        </span>
      </div>
    </>
  );
}
