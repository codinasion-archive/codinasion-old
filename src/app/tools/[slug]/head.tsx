export default function Head({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const title = `${slug
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())} | Tools | Codinasion`;
  const description = `${slug
    .replace(/-/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase())}`;

  return (
    <>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
    </>
  );
}
