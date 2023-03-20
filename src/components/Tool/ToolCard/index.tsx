import Link from "@/components/Link";

import type { ToolType } from "@/types";

type ToolCardProps = {
  ToolData: ToolType;
};

export default function ToolCard({ ToolData }: ToolCardProps) {
  return (
    <>
      <Link
        href={`/tools/${ToolData.slug}`}
        className="block p-3 mb-4 rounded-lg shadow-lg hover:shadow-2xl card_bg"
        externalIcon={false}
      >
        <h5 className="pl-1 text-lg md:text-xl font-bold tracking-tight">
          {ToolData.title}
        </h5>
        <p className="p-1 text-sm">{ToolData.description}</p>
        <div className="pt-1 flex flex-wrap">
          {ToolData.tags.map((tag) => (
            <span
              key={tag}
              className="mx-1 mt-1 bg-green-300 text-xs text-gray-600 p-1 rounded-md"
            >
              <b>{`${tag}`}</b>
            </span>
          ))}
        </div>
      </Link>
    </>
  );
}
