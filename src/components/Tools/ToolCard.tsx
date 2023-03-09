import Link from "@/components/Link";

import Tag from "./Tag";

import type { ToolType } from "@/types";

export default function ToolCard({ ToolData }: { ToolData: ToolType }) {
  return (
    <>
      <Link
        href={`/tools/${ToolData.slug}`}
        className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700"
      >
        <h5 className="text-xl md:text-2xl font-bold tracking-tight">
          {ToolData.title}
        </h5>
        <div className="pt-4 flex flex-wrap">
          {ToolData.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </Link>
    </>
  );
}
