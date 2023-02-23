import Link from "@/components/Link";

import ProjectCard from "./ProjectCard";

import Projects from "@/data/Projects";
import type { ProjectType } from "@/types";

type ProjectsProps = {
  max?: number;
};

export default function ProjectsComponent({ max }: ProjectsProps) {
  return (
    <>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-2xl md:text-4xl tracking-tight font-extrabold">
              Explore our open source projects
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              List of open source projects we have created and maintain 😃
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {
              // If max is defined, then only show that many projects
              max
                ? Projects.slice(0, max).map((project: ProjectType) => (
                    <ProjectCard key={project.title} project={project} />
                  ))
                : // Otherwise, show all projects
                  Projects.map((project: ProjectType) => (
                    <ProjectCard key={project.title} project={project} />
                  ))
            }
          </div>
          {
            // If max is less than the total number of projects, then show a link to view all projects
            max && max < Projects.length && (
              <div className="flex flex-col justify-center items-center py-5 mt-5">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  View all projects
                </Link>
              </div>
            )
          }
        </div>
      </section>
    </>
  );
}
