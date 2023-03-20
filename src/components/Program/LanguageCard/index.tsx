import Link from "@/components/Link";

import type { ProgramLanguageCountTagType } from "@/types";

type LanguageCardProps = {
  TagsData: ProgramLanguageCountTagType[];
};

export default function LanguageCard({ TagsData }: LanguageCardProps) {
  return (
    <>
      <div className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Browse By Language
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {TagsData.map((tag: ProgramLanguageCountTagType) => (
            <div key={tag.name} className="m-1">
              <Link
                href={`/program/tags/${tag.name
                  .toLowerCase()
                  .replace(/#/g, "-sharp")}`}
              >
                <span className="bg-green-300 text-sm text-gray-700 p-1 rounded-l-md focus:bg-white">
                  <b>{tag.name}</b>
                </span>
                <span className="bg-blue-300 dark:bg-blue-400 text-sm text-gray-700 p-1 rounded-r-md">
                  <b>{tag.count}</b>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}