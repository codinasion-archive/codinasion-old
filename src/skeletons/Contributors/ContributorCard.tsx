export default function ContributorCard() {
  return (
    <>
      <div className="animate-pulse flex items-center space-x-4 bg-slate-200 dark:bg-slate-700 rounded-lg p-2 m-3 shadow-md hover:shadow-xl">
        <div className="flex-shrink-0">
          <div className="rounded-full bg-gray-500 h-10 w-10"></div>
        </div>
        <div className="flex-1 min-w-0 space-y-3">
          <div className="h-2 bg-gray-500 rounded"></div>
          <div className="h-2 bg-gray-500 rounded col-span-2"></div>
        </div>
      </div>
    </>
  );
}
