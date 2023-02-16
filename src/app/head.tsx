import SiteMetaData from "@/data/SiteMetaData";

export default function Head() {
  return (
    <>
      <title key="title">{`${SiteMetaData.title}`}</title>
      <meta
        key="description"
        name="description"
        content={`${SiteMetaData.description}`}
      />
    </>
  );
}
