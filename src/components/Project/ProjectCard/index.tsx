import {
  BsCodeSlash,
  BsFillEmojiSmileFill,
  BsTools,
  BsGithub,
} from "react-icons/bs";
import { SiHey } from "react-icons/si";

import Link from "@/components/Link";

import type { ProjectType } from "@/types";

type ProjectCardProps = {
  project: ProjectType;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <div className="rounded-lg m-5 shadow-lg hover:shadow-xl transition hover:scale-105 card_bg">
        <div className="px-6 py-4 text-center">
          {project.title.toLowerCase() === "good 1st issue" ? (
            <BsFillEmojiSmileFill className="h-8 w-8 text-gray-900 rounded m-5 p-1 mx-auto bg-gradient-to-r from-green-400 to-blue-500" />
          ) : project.title.toLowerCase() === "hello world" ? (
            <SiHey className="h-8 w-8 text-gray-900 rounded m-5 p-1 mx-auto bg-gradient-to-r from-green-400 to-blue-500" />
          ) : project.title.toLowerCase() === "tools" ? (
            <BsTools className="h-8 w-8 text-gray-900 rounded m-5 p-1 mx-auto bg-gradient-to-r from-green-400 to-blue-500" />
          ) : (
            <BsCodeSlash className="h-8 w-8 text-gray-900 rounded m-5 p-1 mx-auto bg-gradient-to-r from-green-400 to-blue-500" />
          )}
          <div className="font-bold text-xl mb-2">{project.title}</div>
          <p className="text-md pb-2">{project.description}</p>
        </div>

        {(project.github_url || project.path) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            {project.github_url && (
              <Link
                href={`${project.github_url}`}
                className={`text-center text-white font-bold w-full bg-gray-600 dark:bg-gray-800 p-2 rounded ${
                  !project.path && "col-span-2"
                }`}
                externalIcon={false}
              >
                <BsGithub className="inline-block pb-1" /> Contribute
              </Link>
            )}
            {project.path && (
              <Link
                href={`${project.path}`}
                className={`text-center text-white font-bold w-full bg-gray-600 dark:bg-gray-800 p-2 rounded ${
                  !project.github_url && "col-span-2"
                }`}
                externalIcon={false}
              >
                Explore
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
}
