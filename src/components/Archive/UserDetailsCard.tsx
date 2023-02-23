import Image from "next/image";
import Link from "@/components/Link";

import { GoVerified, GoUnverified } from "react-icons/go";

import { FaUserAlt } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
import { AiFillDelete } from "react-icons/ai";
import { BiUserCheck } from "react-icons/bi";

import { GithubUserType } from "@/types/Archive";

type UserDetailsCardProps = {
  github_user: GithubUserType;
  archive_count: number;
};

export default function UserDetailsCard({
  github_user,
  archive_count,
}: UserDetailsCardProps) {
  return (
    <>
      <div
        className={`grid grid-cols-2 md:grid-cols-5 rounded-lg p-2 m-3 shadow-md hover:shadow-xl ${
          github_user?.pro
            ? "bg-gradient-to-r from-teal-100 to-teal-700 dark:from-cyan-800 dark:to-teal-900"
            : "bg-slate-200 dark:bg-slate-700"
        }`}
      >
        <div>
          <Image
            unoptimized={
              github_user?.pro || github_user?.verified ? false : true
            }
            className="inline-block h-28 w-28 rounded-xl m-1"
            src={`https://github.com/${github_user?.login}.png`}
            alt={`${github_user?.login}`}
            width={128}
            height={128}
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMq66uBwAEqAHl/evvtQAAAABJRU5ErkJggg=="
            placeholder="blur"
          />
        </div>
        <div className="py-4">
          <p className="text-md font-medium text-gray-900 truncate dark:text-white">
            @{github_user?.login}
          </p>
          <p className="text-sm truncate pt-2">
            {github_user?.verified ? (
              <span className="text-green-500">
                <GoVerified className="inline-block" /> Verified
              </span>
            ) : (
              <span className="text-red-500">
                <GoUnverified className="inline-block" /> Scrapped
              </span>
            )}
          </p>
          <p className="text-sm truncate pt-2">
            {github_user?.pro && (
              <span className="text-yellow-500">
                <GoVerified className="inline-block" /> Pro
              </span>
            )}
          </p>
          <p className="text-sm truncate pt-1">
            {github_user?.type === "User" ? (
              <>
                <FaUserAlt className="inline-block text-gray-500 dark:text-gray-200" />{" "}
                {github_user?.type}
              </>
            ) : (
              <>
                <VscOrganization className="inline-block text-gray-500 dark:text-gray-200" />{" "}
                {github_user?.type}
              </>
            )}
          </p>
        </div>
        <div className="py-4">
          <p className="text-md font-medium text-gray-900 dark:text-white">
            {archive_count}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Total Archives
          </p>
        </div>
        <div className="py-4">
          <p className="text-md font-medium text-gray-900 truncate dark:text-white">
            {new Date(github_user?.last_clicked_at).toLocaleDateString(
              "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
          <p className="text-sm text-gray-500 truncate dark:text-gray-400">
            Last Archived
          </p>
        </div>
        <div className="py-4 space-y-4 col-span-2 md:col-span-1">
          {github_user?.verified ? (
            <button
              className="btn w-full p-1 px-5 rounded bg-transparent border border-green-400"
              disabled
            >
              <BiUserCheck className="inline-block text-green-500" />{" "}
              <b>Verified</b>
            </button>
          ) : (
            <Link
              href={`https://github.com/codinasion/archive/issues/new?assignees=harshraj8843&labels=add-verify-username&template=add-verify.yml&title=${github_user?.login}&username=${github_user?.login}`}
            >
              <button className="btn w-full p-1 px-5 rounded bg-green-200">
                <BiUserCheck className="inline-block text-green-500" />{" "}
                <b>Verify</b>
              </button>
            </Link>
          )}
          <Link
            href={`https://github.com/codinasion/archive/issues/new?assignees=harshraj8843&labels=delete-username&template=delete.yml&title=${github_user?.login}&username=${github_user?.login}`}
          >
            <button className="btn w-full p-1 px-5 mt-2 rounded bg-transparent hover:bg-red-100 border border-red-500">
              <AiFillDelete className="inline-block text-red-400" />{" "}
              <b>Delete All Clicks</b>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
