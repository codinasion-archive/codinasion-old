export default function Head({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const title = `${slug
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())} | Program | Codinasion`;
  const description = `Write a program to ${slug.replace(/-/g, " ")}`;

  return (
    <>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
    </>
  );
}
