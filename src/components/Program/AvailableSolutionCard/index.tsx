import { AiOutlinePlus } from "react-icons/ai";

import Link from "@/components/Link";

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
      <div className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Available Solutions
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {tags.map((tag) => (
            <div key={tag} className="m-1">
              <Link
                href={`/program/tags/${tag
                  .toLowerCase()
                  .replace(/#/g, "-sharp")}`}
              >
                <span className="bg-green-300 text-sm text-gray-700 p-1 rounded-md focus:bg-white">
                  <b>{tag}</b>
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link
            href={`https://github.com/codinasion/program/issues/${trackId}`}
            className="block w-full text-center text-sm bg-blue-500 p-2 rounded-md text-white"
            externalIcon={false}
          >
            <AiOutlinePlus className="inline-block w-5 h-5" /> Add Solution
          </Link>
        </div>
      </div>
    </>
  );
}
