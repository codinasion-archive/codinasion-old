export default function ContributorsCard() {
  return (
    <>
      <div className="block p-5 mb-2 rounded-lg shadow-xl hover:shadow-2xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-700">
        <h5 className="text-xl md:text-2xl font-bold text-center">
          💖 Contributors 💖
        </h5>
        <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-500" />
        <div className="animate-pulse py-2 flex flex-wrap">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="rounded-full bg-gray-500 h-10 w-10 m-1"
              ></div>
            ))}
        </div>
      </div>
    </>
  );
}
