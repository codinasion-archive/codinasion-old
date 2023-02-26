export default function Head({ params }: { params: { username: string } }) {
  const { username } = params;

  {
    /* https://beta.nextjs.org/docs/routing/defining-routes#optional-catch-all-segments */
  }
  const title = `${
    username ? `${username[0]}'s ` : ""
  }LinkFree OG | Codinasion`;

  const description = `Dynamically generated OG images for ${
    username ? `${username[0]}'s LinkFree Profile` : "LinkFree"
  }`;

  return (
    <>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
    </>
  );
}
