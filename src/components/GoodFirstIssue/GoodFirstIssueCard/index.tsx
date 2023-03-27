import Link from "@/components/Link";

import { AiOutlineClockCircle } from "react-icons/ai";
import { VscRepo } from "react-icons/vsc";

export default function GoodFirstIssueCard({ GoodFirstIssueData }: any) {
  return (
    <>
      <Link
        key={GoodFirstIssueData.id}
        href={`${GoodFirstIssueData.html_url}`}
        className="block p-3 mb-4 rounded-lg shadow-lg hover:shadow-2xl card_bg"
        externalIcon={false}
      >
        <h5 className="pl-1 text-lg md:text-xl font-bold tracking-tight">
          {GoodFirstIssueData.title}
        </h5>
        <div className="pt-1 flex flex-wrap">
          {GoodFirstIssueData.labels.map((label: any) => (
            <span
              key={label.id}
              className="mx-1 mt-1 bg-green-300 text-xs text-gray-600 p-1 rounded-md"
            >
              <b>{label.name}</b>
            </span>
          ))}
        </div>
        <div className="pl-1 mt-2 md:flex md:space-x-10">
          <div>
            <VscRepo className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-xs">
              <b>
                {GoodFirstIssueData.repository_url.replace(
                  "https://api.github.com/repos/",
                  ""
                )}
              </b>
            </span>
          </div>
          <div>
            <AiOutlineClockCircle className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-xs">
              <b>{new Date(GoodFirstIssueData.updated_at).toDateString()}</b>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
