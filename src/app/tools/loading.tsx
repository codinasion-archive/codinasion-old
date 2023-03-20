import Breadcrumb from "@/components/Breadcrumb";

export default async function Loading() {
  return (
    <>
      <Breadcrumb
        links={[
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Tools",
          },
        ]}
      />
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        <div className="md:col-span-4">
          <div className="h-20 mb-4 bg-gray-500 rounded-lg"></div>
          <div className="h-20 mb-4 bg-gray-500 rounded-lg"></div>
          <div className="h-20 mb-4 bg-gray-500 rounded-lg"></div>
          <div className="h-20 mb-4 bg-gray-500 rounded-lg"></div>
        </div>
        <div className="md:col-span-2">
          <div className="h-96 bg-gray-500 rounded"></div>
        </div>
      </div>
    </>
  );
}
