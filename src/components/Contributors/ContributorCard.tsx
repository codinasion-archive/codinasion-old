import Image from "next/image";
import Link from "@/components/Link";

import type { ContributorType } from "@/types/Contributors";

export default function ContributorCard({
  contributor,
}: {
  contributor: ContributorType;
}) {
  return (
    <>
      <Link href={`https://github.com/${contributor.login}`}>
        <div className="flex items-center space-x-4 bg-slate-200 dark:bg-slate-700 rounded-lg p-2 m-3 shadow-md hover:shadow-xl">
          <div className="flex-shrink-0">
            <Image
              className="inline-block h-10 w-10 rounded-xl ring-2 ring-white dark:ring-gray-900 m-1"
              src={`https://github.com/${contributor.login}.png`}
              alt={`${contributor.name}`}
              width={64}
              height={64}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-md font-medium text-gray-900 truncate dark:text-white">
              {contributor.name}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              @{contributor.login}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
