import Script from "next/script";

import "./globals.css";

import Layout from "@/Layout";

import Favicon from "@/public/favicon/favicon.ico";
import Logo from "@/public/logo.png";
import Manifest from "@/public/favicon/manifest.json";

async function getFeaturedSponsorsData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/sponsors/featured`,
    {
      next: { revalidate: 360 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const featuredSponsors = await getFeaturedSponsorsData();

  return (
    <html lang="en">
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta charSet="utf-8" />
      <link rel="icon" href={`${Favicon.src}`} />
      <meta name="theme-color" content="#000000" />
      <link rel="apple-touch-icon" href={`${Logo.src}`} />
      <link rel="manifest" href={`${Manifest}`} />

      {/* <!-- humans.txt --> */}
      <link rel="author" href="humans.txt" />

      <head />

      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X1PJY1SDDM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-X1PJY1SDDM');
        `}
      </Script>

      <body className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <Layout featuredSponsors={featuredSponsors}>{children}</Layout>
      </body>
    </html>
  );
}
