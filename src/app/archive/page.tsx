import { UserSearch, UserCard } from "@/components/Archive";

import type { GithubUserType } from "@/types/Archive";

async function getArchiveUsersData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/archive/users`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ArchivePage() {
  const archiveUsers = await getArchiveUsersData();

  return (
    <>
      <section className="my-5">
        <div className="flex items-center md:px-40 md:mx-40 px-5">
          <UserSearch />
        </div>
        <div className="py-5">
          <div className="lg:grid lg:grid-cols-4">
            {archiveUsers.map((github_user: GithubUserType) => (
              <UserCard key={github_user.id} github_user={github_user} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
