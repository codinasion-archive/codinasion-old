export default function LanguageTag({ tag = "Tag" }: { tag: string }) {
  return (
    <>
      <span className="bg-green-200 dark:bg-green-300 text-sm text-gray-600 p-1 m-1 rounded-md">
        <b>{tag}</b>
      </span>
    </>
  );
}
