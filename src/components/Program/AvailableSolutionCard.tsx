import { AiOutlinePlus } from "react-icons/ai";

import Image from "@/components/Image";
import Link from "@/components/Link";

import { ProgramDetailType, ProgramCodeType } from "@/types";

type AvailableSolutionCardProps = {
  ProgramData: ProgramDetailType;
};

export default function AvailableSolutionCard({
  ProgramData,
}: AvailableSolutionCardProps) {
  return (
    <>
      <div className="block p-5 mb-5 rounded-md shadow-xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Available Solutions
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {ProgramData.codes.map((code: ProgramCodeType) => (
            <div key={code.language.name} className="m-1">
              <Link
                href={`/program/language/${code.language.name
                  .toLowerCase()
                  .replace(/#/g, "-sharp")
                  .replace(/\+/g, "-plus")}/${ProgramData.slug}`}
              >
                <Image
                  src={code.language.logo}
                  alt={code.language.name}
                  className="w-16 h-16 rounded shadow-lg"
                  height={128}
                  width={128}
                />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-5">
          <Link
            href={`https://github.com/codinasion/program/issues/${ProgramData.track_id}`}
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
