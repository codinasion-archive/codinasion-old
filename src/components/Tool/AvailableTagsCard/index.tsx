import Link from "@/components/Link";

type AvailableTagsCardProps = {
  tags: string[];
};

export default function AvailableTagsCard({
  tags = [],
}: AvailableTagsCardProps) {
  return (
    <>
      <div className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Available Tags
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {tags.map((tag) => (
            <div key={tag} className="m-1">
              <Link
                href={`/tools/tags/${tag
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
      </div>
    </>
  );
}
