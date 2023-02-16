import Link from "next/link";

import { HiUsers, HiClock } from "react-icons/hi";

import LanguageTag from "./LanguageTag";

import type { ProgramType } from "@/types";

export default function ProgramCard({
  ProgramData,
}: {
  ProgramData: ProgramType;
}) {
  return (
    <>
      <Link
        href={`/program/${ProgramData.slug}`}
        className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
      >
        <h5 className="text-xl md:text-2xl font-bold tracking-tight">
          {ProgramData.title}
        </h5>
        <div className="pt-4 flex flex-wrap">
          {ProgramData.tags.map((tag) => (
            <LanguageTag key={tag} tag={tag} />
          ))}
        </div>
        <div className="mt-4 md:flex md:space-x-10">
          <div>
            <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-sm">Contributors :</span>{" "}
            <span className="text-sm">
              <b>{ProgramData.contributors.length}</b>
            </span>
          </div>
          <div>
            <HiClock className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <span className="text-sm">Last Updated :</span>{" "}
            <span className="text-sm">
              <b>{new Date(ProgramData.latestUpdateDate).toDateString()}</b>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
