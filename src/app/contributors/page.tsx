import { BsFillInfoCircleFill } from "react-icons/bs";

import Image from "@/components/Image";
import Link from "@/components/Link";

import { getContributorsData } from "@/data";

import { ContributorType } from "@/types";

export const metadata = {
  title: "Contributors",
  description: "List of contributors, who are part of this community",
};

export default async function ContributorsPage() {
  const contributors = await getContributorsData();

  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold">Contributors</h1>
        <p className="text-gray-500 mt-5">
          We are thankful to all the contributors, who are part of this
          community ❤️
        </p>
      </div>

      <div className="my-5 py-5">
        <table className="table-auto w-full text-sm md:text-md text-center rounded bg-gray-300 dark:bg-gray-700">
          <thead className="text-gray-500 dark:text-gray-300">
            <tr>
              <th className="md:py-2 text-left pl-1 md:pl-5">Name</th>
              <th title="This data is not accurate, it will be updated gradually :)">
                <span>Contributions</span>
                <BsFillInfoCircleFill className="hidden md:inline-block text-gray-500 dark:text-gray-300 ml-1" />
              </th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {contributors.map((data: ContributorType) => (
              <tr
                key={data.contributor.id}
                className="bg-gray-200 dark:bg-gray-600"
              >
                <td className="py-3 font-bold text-left pl-1 md:pl-5">
                  <Link
                    href={`https://github.com/${data.contributor.login}`}
                    externalIcon={false}
                  >
                    <Image
                      src={`https://github.com/${data.contributor.login}.png`}
                      alt={data.contributor.login}
                      className="rounded w-8 h-8 hidden md:inline-block"
                      width={48}
                      height={48}
                    />{" "}
                    <span className="ml-1 md:ml-2">
                      {data.contributor.name
                        ? data.contributor.name
                        : "@" + data.contributor.login}
                    </span>
                  </Link>
                </td>
                <td>
                  <span
                    className="font-bold"
                    title="These commits are not accurate, it will be updated gradually :)"
                  >
                    <span className="text-green-500">{data.contributions}</span>{" "}
                    <span className="text-gray-600 dark:text-gray-300 text-sm hidden md:inline-block">
                      Commits
                    </span>
                  </span>
                </td>
                <td>
                  <span
                    className={`p-1 md:p-2 m-1 rounded font-bold ${
                      data.maintainer
                        ? "bg-green-300 text-gray-700"
                        : data.team_member
                        ? "bg-blue-300 text-gray-700"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {data.maintainer
                      ? "Maintainer"
                      : data.team_member
                      ? "Team Member"
                      : "Contributor"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
