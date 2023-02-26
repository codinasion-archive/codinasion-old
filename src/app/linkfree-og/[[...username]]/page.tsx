import LinkFreeOG from "@/components/LinkFreeOG";

export default async function ArchivePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;

  return (
    <>
      <section className="my-5">
        <div className="text-center py-5 space-y-5">
          <h1 className="text-4xl font-bold">LinkFree OG</h1>
          <p className="text-lg pb-5">
            Dynamically generated OG images for LinkFree
          </p>
        </div>
        <div className="flex items-center md:px-40 md:mx-40 px-5">
          {/* https://beta.nextjs.org/docs/routing/defining-routes#optional-catch-all-segments */}
          <LinkFreeOG username={username ? username[0] : ""} />
        </div>
      </section>
    </>
  );
}
