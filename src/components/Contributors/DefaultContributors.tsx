import Image from "@/components/Image";
import Link from "@/components/Link";

import { ContributorType } from "@/types/Contributors";

type DefaultContributorsProps = {
  contributors: ContributorType[];
};

export default function DefaultContributors({
  contributors,
}: DefaultContributorsProps) {
  const randomContributors = contributors.sort(() => Math.random() - 0.5);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-md text-center my-10 py-5 lg:mb-12">
          <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold">
            Our Awesome Community 💖
          </h2>
        </div>
        <div className="text-center overflow-hidden justify-center ">
          {randomContributors.slice(0, 100).map((contributor) => (
            <Link
              href={`https://github.com/${contributor.login}`}
              key={contributor.id}
              externalIcon={false}
            >
              <Image
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-900 m-1"
                src={`https://github.com/${contributor.login}.png`}
                alt={`${contributor.name}`}
                width={64}
                height={64}
              />
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center py-5 mt-5">
          <Link
            href="/contributors"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white dark:bg-gray-200 hover:bg-gray-200 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            See all contributors
          </Link>
        </div>
      </section>
    </>
  );
}
