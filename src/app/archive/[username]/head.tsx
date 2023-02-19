export default function Head({ params }: { params: { username: string } }) {
  const { username } = params;

  return (
    <>
      <title key="title">{`${username} | Archive | Codinasion`}</title>
      <meta
        key="description"
        name="description"
        content={`${username} Github Profile Archive`}
      />
    </>
  );
}
