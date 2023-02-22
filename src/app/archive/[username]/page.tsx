import Link from "next/link";

import { UserDetailsCard, ArchiveCalendar } from "@/components/Archive";
import Breadcrumb from "@/components/Breadcrump";

import type { GithubUserArchiveType } from "@/types/Archive";

async function generateData(github_user_archives: GithubUserArchiveType[]) {
  // Get list of all dates of 2023
  const dates = [];
  for (let i = 0; i <= 365; i++) {
    dates.push(new Date(2023, 0, i + 2));
  }

  // iterate over all dates and check if there is an archive for that date
  const data = dates.map((date) => {
    const dateStr = date.toISOString().split("T")[0];
    const archive = github_user_archives?.find(
      (archive: any) => archive.date === dateStr
    );

    // if there is an archive for that date, return the archive data
    if (archive) {
      return {
        date: dateStr,
        count: 1,
        level: 3,
      };
    } else {
      return {
        date: dateStr,
        count: 0,
        level: 0,
      };
    }
  });

  return data;
}

async function getArchiveData(username: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/archive/${username}`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return "error";
  }

  return res.json();
}

export default async function ArchivePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;

  const archiveData = await getArchiveData(username);

  if (archiveData === "error") {
    return (
      <>
        <section>
          <div className="text-center my-10 py-5 lg:mb-12">
            <h2 className="mb-4 text-xl font-extrabold">
              Username {'"'}
              {username}
              {'"'} Not Found
            </h2>
          </div>
          <div className="text-center my-10 py-5 lg:mb-12">
            <Link
              href={`https://github.com/codinasion/archive/issues/new?assignees=harshraj8843&labels=add-verify-username&template=add-verify.yml&title=${username}&username=${username}`}
              className="mt-5 p-5 bg-gray-300 hover:bg-gray-200 rounded"
            >
              <b>Archive This User</b>
            </Link>
          </div>
        </section>
      </>
    );
  }

  const data = await generateData(archiveData.github_user_archives);

  return (
    <>
      <section>
        <div className="px-4">
          <Breadcrumb
            links={[
              {
                title: "Home",
                url: "/",
              },
              {
                title: "Archive",
                url: "/archive",
              },
              {
                title: username,
              },
            ]}
          />
        </div>
        <UserDetailsCard
          github_user={archiveData.github_user}
          archive_count={archiveData.github_user_archives?.length}
        />
        <ArchiveCalendar
          // @ts-ignore
          data={data}
          github_user_archives={archiveData.github_user_archives}
        />
      </section>
    </>
  );
}
