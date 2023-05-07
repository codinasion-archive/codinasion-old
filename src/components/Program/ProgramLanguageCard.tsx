import Image from "@/components/Image";
import Link from "@/components/Link";

import type { ProgramLanguageType } from "@/types";

type LanguageCardProps = {
  languages: ProgramLanguageType[];
};

export default function ProgramLanguageCard({ languages }: LanguageCardProps) {
  return (
    <>
      <div className="block p-5 mb-5 rounded-md shadow-xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Browse By Language
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {languages.map((language: ProgramLanguageType) => (
            <div key={language.name} className="m-1">
              <Link
                href={`/program/language/${language.name
                  .toLowerCase()
                  .replace(/#/g, "-sharp")
                  .replace(/\+/g, "-plus")}`}
              >
                <Image
                  src={language.logo}
                  alt={language.name}
                  className="w-16 md:w-20 rounded shadow-lg"
                  height={128}
                  width={128}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
