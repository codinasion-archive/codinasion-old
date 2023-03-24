import Link from "@/components/Link";
import { HiUsers, HiClock } from "react-icons/hi";

import type { ProgramType } from "@/types";

type ProgramCardProps = {
  ProgramData: ProgramType;
};

export default function ProgramCard({ ProgramData }: ProgramCardProps) {
  return (
    <>
      <Link
        key={ProgramData.slug}
        href={`/program/${ProgramData.slug}`}
        className="block p-3 mb-4 rounded-lg shadow-lg hover:shadow-2xl card_bg"
        externalIcon={false}
      >
        <h5 className="pl-1 text-lg md:text-xl font-bold tracking-tight">
          Write a program to {ProgramData.title.toLowerCase()}
        </h5>
        <div className="pt-1 flex flex-wrap">
          {ProgramData.tags.map((tag) => (
            <span
              key={tag}
              className="mx-1 mt-1 bg-green-300 text-xs text-gray-600 p-1 rounded-md"
            >
              <b>{tag}</b>
            </span>
          ))}
        </div>
        <div className="pl-1 mt-2 md:flex md:space-x-10">
          <div>
            <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-xs">Contributors :</span>{" "}
            <span className="text-xs">
              <b>{ProgramData.contributors.length}</b>
            </span>
          </div>
          <div>
            <HiClock className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-xs">Last Updated :</span>{" "}
            <span className="text-xs">
              <b>{new Date(ProgramData.latestUpdateDate).toDateString()}</b>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
