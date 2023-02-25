import LanguageCountTag from "./LanguageCountTag";
import type { Good1stIssueTagType } from "@/types";

export default function TagsCard({
  TagsData,
}: {
  TagsData: Good1stIssueTagType[];
}) {
  return (
    <>
      <div className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
        <h5 className="text-xl md:text-2xl font-bold text-center">
          Language Tags
        </h5>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-500" />
        <div className="py-2 flex flex-wrap">
          {TagsData.map((tag: Good1stIssueTagType) => (
            <LanguageCountTag key={tag.label} tag={tag} />
          ))}
        </div>
      </div>
    </>
  );
}
