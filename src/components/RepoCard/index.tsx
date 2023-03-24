import { VscRepo, VscIssues } from "react-icons/vsc";
import { AiOutlineStar, AiOutlineClockCircle } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";

import { getRepoData } from "@/data";

import Link from "@/components/Link";

export default async function RepoCard({ full_name }: { full_name: string }) {
  const RepoData = await getRepoData(full_name);

  return (
    <>
      <Link
        href={RepoData.html_url}
        externalIcon={false}
        className="block p-5 my-5 rounded-lg shadow-xl hover:shadow-2xl card_bg"
      >
        <h5 className="text-lg font-bold">
          <VscRepo className="inline-block" /> {RepoData.full_name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {RepoData.description || "No description"}
        </span>
        <div className="flex items-center mt-2">
          <AiOutlineStar className="inline-block" />{" "}
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
            {RepoData.stargazers_count}
          </span>
          <TbGitFork className="inline-block ml-2" />{" "}
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
            {RepoData.forks_count}
          </span>
          <VscIssues className="inline-block ml-2" />{" "}
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
            {RepoData.open_issues_count}
          </span>
        </div>
        <div className="flex items-center mt-2">
          <AiOutlineClockCircle className="inline-block" />{" "}
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
            Last Updated:
          </span>{" "}
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400 ml-1">
            {new Date(RepoData.updated_at).toDateString()}
          </span>
        </div>
      </Link>
    </>
  );
}
