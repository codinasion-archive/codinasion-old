import Link from "@/components/Link";
import Image from "@/components/Image";

import type { GoodFirstIssueLabelType } from "@/types";

import { GoodFirstIssueLabels } from "@/data";

export default function LabelsCard({
  LabelsData = GoodFirstIssueLabels,
}: {
  LabelsData?: GoodFirstIssueLabelType[];
}) {
  return (
    <>
      <div className="block p-5 mb-5 rounded-lg shadow-xl hover:shadow-2xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Browse By Label
        </h5>

        <hr className="my-2 border-gray-500 sm:mx-auto" />

        <div className="row">
          {LabelsData.map((label: GoodFirstIssueLabelType) => (
            <Link
              key={label.name}
              href={`/good-first-issue/labels/${label.name}`}
              className="grid grid-cols-5 gap-2 mt-2 p-2 rounded-lg card_element_bg"
            >
              <div className="col-span-1">
                <Image
                  src={label.logo}
                  alt={label.name}
                  className="w-12 h-12 rounded-md"
                  height={48}
                  width={48}
                />
              </div>
              <div className="col-span-4 pt-2">
                <span className="text-lg font-semibold">{label.name}</span>
              </div>
            </Link>
          ))}
        </div>

        <hr className="my-2 border-gray-500 sm:mx-auto" />

        <div className="mt-5">
          <Link
            href={`https://github.com/codinasion/codinasion/issues/new?template=good-first-issue-add-label.yml`}
            className="block w-full text-center text-md bg-blue-500 p-2 rounded-md text-white"
            externalIcon={false}
          >
            <span className="font-bold">Add a new Label</span>
          </Link>
        </div>

        <div className="mt-5">
          <Link
            href={`https://github.com/codinasion/codinasion/issues/new?template=good-first-issue-feature-repo.yml`}
            className="block w-full text-center text-md bg-blue-500 p-2 rounded-md text-white"
            externalIcon={false}
          >
            <span className="font-bold">Feature a repository</span>
          </Link>
        </div>
      </div>
    </>
  );
}
