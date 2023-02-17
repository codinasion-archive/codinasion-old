import ProjectSkeletonCard from "./ProjectCard";

export default function Projects() {
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
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <ProjectSkeletonCard key={index} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
