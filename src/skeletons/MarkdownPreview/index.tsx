export default function MarkdownPreview() {
  return (
    <>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-5 bg-gray-500 rounded"></div>
          <div className="space-y-1">
            <div className="h-2 bg-gray-500 rounded"></div>
            <div className="h-2 bg-gray-500 rounded"></div>
            <div className="h-2 bg-gray-500 rounded"></div>
            <div className="h-2 bg-gray-500 rounded"></div>
            <div className="h-2 bg-gray-500 rounded"></div>
          </div>
          <div className="space-y-5">
            <div className="h-20 bg-gray-500 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
}
