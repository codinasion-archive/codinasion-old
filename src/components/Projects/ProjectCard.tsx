import Link from "next/link";

import { DiGithubBadge } from "react-icons/di";

import type { ProjectType } from "@/types";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <>
      <div
        key={project.title}
        className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 dark:border-gray-600 xl:p-8 dark:bg-gray-700 shadow-lg hover:shadow-2xl hover:animate-scale"
      >
        <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
        <p className="mb-4 h-full font-medium text-gray-500 sm:text-lg dark:text-gray-400">
          {project.description}
        </p>
        {project.path && (
          <Link
            href={project.path}
            className="my-4 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white"
          >
            Explore 🚀
          </Link>
        )}
        {project.github_url && (
          <Link
            href={project.github_url}
            className="mb-4 text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white"
          >
            <DiGithubBadge className="inline-block w-5 h-5" /> Contribute
          </Link>
        )}
      </div>
    </>
  );
}
