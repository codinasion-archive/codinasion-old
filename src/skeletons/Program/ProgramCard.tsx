import { HiUsers, HiClock } from "react-icons/hi";

import LanguageTag from "./LanguageTag";

export default function ProgramCard() {
  return (
    <>
      <div className="animate-pulse block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
        <h5 className="text-xl md:text-2xl font-bold tracking-tight">
          <div className="h-4 bg-gray-500 rounded"></div>
        </h5>
        <div className="pt-4 flex flex-wrap">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <LanguageTag key={index} />
            ))}
        </div>
        <div className="mt-4 md:flex md:space-x-10">
          <div>
            <HiUsers className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <div className="inline-block h-2 bg-gray-500 rounded w-20"></div>
          </div>
          <div>
            <HiClock className="inline-block text-gray-500 dark:text-gray-300" />{" "}
            <div className="inline-block h-2 bg-gray-500 rounded w-20"></div>
          </div>
        </div>
      </div>
    </>
  );
}
