import Link from "@/components/Link";

import type { Good1stIssueLabelType } from "@/types";

type LabelsCardProps = {
  LabelsData: Good1stIssueLabelType[];
};

export default function LabelsCard({ LabelsData }: LabelsCardProps) {
  return (
    <>
      <div className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Browse By Label
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {LabelsData.map((label: Good1stIssueLabelType) => (
            <div key={label.label} className="m-1">
              <Link
                href={`/good-1st-issue/labels/${label.label
                  .toLowerCase()
                  .replace(/#/g, "-sharp")}`}
              >
                <span className="bg-green-300 text-sm text-gray-700 p-1 rounded-l-md focus:bg-white">
                  <b>{label.label}</b>
                </span>
                <span className="bg-blue-300 dark:bg-blue-400 text-sm text-gray-700 p-1 rounded-r-md">
                  <b>{label.issue_count}</b>
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
