import Link from "@/components/Link";

import { FaUserAlt } from "react-icons/fa";
import { GoRepo } from "react-icons/go";

import type { Good1stIssueType } from "@/types";

type Good1stIssueCardProps = {
  Good1stIssueData: Good1stIssueType;
};

export default function Good1stIssueCard({
  Good1stIssueData,
}: Good1stIssueCardProps) {
  return (
    <>
      <Link
        key={Good1stIssueData.issue_title}
        href={`${Good1stIssueData.issue_url}`}
        className="block p-3 mb-4 rounded-lg shadow-lg hover:shadow-2xl card_bg"
        externalIcon={false}
      >
        <h5 className="pl-1 text-lg md:text-xl font-bold tracking-tight">
          {Good1stIssueData.issue_title}
        </h5>
        <div className="pt-1 flex flex-wrap">
          {Good1stIssueData.issue_labels.map((label) => (
            <span
              key={label}
              className="mx-1 mt-1 bg-green-300 text-xs text-gray-600 p-1 rounded-md"
            >
              <b>{label}</b>
            </span>
          ))}
        </div>
        <div className="pl-1 mt-2 md:flex md:space-x-10">
          <div>
            <GoRepo className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-xs">Repository :</span>{" "}
            <span className="text-xs">
              <b>{Good1stIssueData.issue_short_url}</b>
            </span>
          </div>
          <div>
            <FaUserAlt className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-xs">Author :</span>{" "}
            <span className="text-xs">
              <b>{Good1stIssueData.issue_author}</b>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
