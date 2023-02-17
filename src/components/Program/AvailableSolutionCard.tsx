import Link from "next/link";

import { AiOutlinePlus } from "react-icons/ai";

import LanguageTag from "./LanguageTag";

type AvailableSolutionCardProps = {
  tags: string[];
  trackId: number;
};

export default function AvailableSolutionCard({
  tags = [],
  trackId = 1,
}: AvailableSolutionCardProps) {
  return (
    <>
      <div className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
        <h5 className="text-xl md:text-2xl font-bold text-center">
          Available Solutions
        </h5>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-500" />
        <div className="py-2 flex flex-wrap">
          {tags.map((tag, index) => (
            <LanguageTag key={index} tag={tag} />
          ))}
        </div>
        <div className="mt-5">
          <Link
            href={`https://github.com/codinasion/program/issues/${trackId}`}
            className="block w-full text-center text-sm bg-blue-500 p-2 rounded-md text-white"
          >
            <AiOutlinePlus className="inline-block w-5 h-5" /> Add Solution
          </Link>
        </div>
      </div>
    </>
  );
}
