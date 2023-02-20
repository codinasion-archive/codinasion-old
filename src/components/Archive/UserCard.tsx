import Image from "next/image";
import Link from "next/link";

import { GoVerified } from "react-icons/go";

import type { GithubUserType } from "@/types/Archive";

type UserCardProps = {
  github_user: GithubUserType;
};

export default function UserCard({ github_user }: UserCardProps) {
  return (
    <>
      <Link href={`/archive/${github_user?.login}`}>
        <div className="flex items-center space-x-4 bg-slate-200 dark:bg-slate-700 rounded-lg p-2 m-3 shadow-md hover:shadow-xl">
          <div className="flex-shrink-0">
            <Image
              className="inline-block h-10 w-10 rounded-xl m-1"
              src={`https://github.com/${github_user?.login}.png`}
              alt={`${github_user?.login}`}
              width={64}
              height={64}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-md font-medium text-gray-900 truncate dark:text-white">
              @{github_user?.login}
            </p>

            <p className="text-sm truncate">
              {github_user?.sponsor ? (
                <span className="text-amber-900 dark:text-amber-500">
                  <GoVerified className="inline-block" /> Sponsor
                </span>
              ) : github_user?.verified ? (
                <span className="text-green-500">
                  <GoVerified className="inline-block" /> Verified
                </span>
              ) : (
                <></>
              )}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
