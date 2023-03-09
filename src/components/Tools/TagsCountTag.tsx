import type { ToolTagType } from "@/types";

export default function TagsCountTag({
  tag = {
    name: "C",
    count: 3,
  },
}: {
  tag: ToolTagType;
}) {
  return (
    <>
      <div className="m-1">
        <span className="bg-green-200 dark:bg-green-300 text-sm text-gray-700 p-1 rounded-l-md focus:bg-white">
          <b>{tag.name}</b>
        </span>
        <span className="bg-blue-200 dark:bg-blue-400 text-sm text-gray-700 p-1 rounded-r-md">
          <b>{tag.count}</b>
        </span>
      </div>
    </>
  );
}
