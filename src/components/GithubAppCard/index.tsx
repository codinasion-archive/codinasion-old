import { FaRobot } from "react-icons/fa";
import { GoRepo } from "react-icons/go";
import { MdFileDownload } from "react-icons/md";

import { getGithubAppData } from "@/data";

import Link from "@/components/Link";

export default async function GithubAppCard({ slug }: { slug: string }) {
  const AppData = await getGithubAppData(slug);

  return (
    <>
      <div className="block p-5 my-5 rounded-lg shadow-xl hover:shadow-2xl card_bg">
        <h5 className="text-lg font-bold">
          <FaRobot className="inline-block text-3xl mr-2 pb-1" /> {AppData.name}{" "}
          Github App
        </h5>

        <div className="grid grid-cols-1 gap-4 mt-5">
          <Link
            href={AppData.html_url}
            externalIcon={false}
            className="flex items-center justify-between p-3 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
          >
            <span>
              <MdFileDownload className="inline-block text-2xl mr-2" /> Install
              Me
            </span>
          </Link>
          <Link
            href={AppData.external_url}
            externalIcon={false}
            className="flex items-center justify-between p-3 text-sm font-medium text-white bg-gray-800 rounded-lg shadow-md hover:shadow-lg"
          >
            <span>
              <GoRepo className="inline-block text-2xl mr-2" /> View on GitHub
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
