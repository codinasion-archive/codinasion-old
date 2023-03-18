import Link from "@/components/Link";
import Image from "@/components/Image";

type ContributorsCardProps = {
  contributors: string[];
};

export default function ContributorsCard({
  contributors = [],
}: ContributorsCardProps) {
  return (
    <>
      <div className="block p-5 my-5 rounded-lg shadow-xl hover:shadow-2xl card_bg">
        <h5 className="text-lg md:text-xl font-bold text-center">
          Contributors
        </h5>
        <hr className="my-2 border-gray-500 sm:mx-auto" />
        <div className="py-2 flex flex-wrap">
          {contributors.map((contributor) => (
            <Link
              href={`https://github.com/${contributor}`}
              key={contributor}
              externalIcon={false}
            >
              <Image
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-900 m-1"
                src={`https://github.com/${contributor}.png`}
                alt={`${contributor}`}
                width={64}
                height={64}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
