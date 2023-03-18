import { Projects } from "@/data";
import type { ProjectType } from "@/types";

import ProjectCard from "@/components/Project/ProjectCard";

export const metadata = {
  title: "Projects",
  description: "List of projects, we maintain",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="text-center my-5">
        <h1 className="text-4xl font-bold">Active Projects</h1>
        <p className="text-gray-500 mt-5">
          We are working on these projects, and we are open to contributions.
        </p>
      </div>
    </>
  );
}
