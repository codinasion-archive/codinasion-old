import Favicon from "@/public/favicon/favicon.ico";
import Logo from "@/public/logo.png";
import Manifest from "@/public/favicon/manifest.json";
import SiteMetaData from "@/data/SiteMetaData";

export default function Head() {
  return (
    <>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta charSet="utf-8" />
      <link rel="icon" href={`${Favicon.src}`} />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href={`${Logo.src}`} />
      <link rel="manifest" href={`${Manifest}`} />
      <title key="title">{`${SiteMetaData.title}`}</title>
      <meta
        key="description"
        name="description"
        content={`${SiteMetaData.description}`}
      />
    </>
  );
}
