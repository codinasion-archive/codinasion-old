import Script from "next/script";

import Layout from "@/Layout";

import "./globals.css";

import { SiteMetadata } from "@/data";
import Favicon from "@/public/favicon/favicon.ico";
import AppleTouchIcon from "@/public/favicon/apple-touch-icon.png";
import ShortcutIcon from "@/public/favicon/favicon-16x16.png";
import Logo from "@/public/logo.png";
import Manifest from "@/public/favicon/manifest.json";

export const metadata = {
  title: SiteMetadata.title,
  description: SiteMetadata.description,

  // basic
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  manifest: Manifest,
  icons: {
    icon: Favicon.src,
    shortcut: ShortcutIcon.src,
    apple: AppleTouchIcon.src,
    android: Logo.src,
  },

  // robots.txt
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Open Graph
  openGraph: {
    title: `${SiteMetadata.title}`,
    description: `${SiteMetadata.description}`,
    url: `${SiteMetadata.site_url}`,
    siteName: `${SiteMetadata.title}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_API_URL}/og`,
        width: 1200,
        height: 630,
        alt: `${SiteMetadata.title}`,
      },
    ],
    locale: "en-US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: `${SiteMetadata.title}`,
    description: `${SiteMetadata.description}`,
    siteId: SiteMetadata.twitter_userid,
    creator: SiteMetadata.twitter_username,
    creatorId: SiteMetadata.twitter_userid,
    images: [`${process.env.NEXT_PUBLIC_API_URL}/og`],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <!-- humans.txt --> */}
      <link rel="author" href="humans.txt" />

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
      <body className="bg-slate-200 dark:bg-slate-900 text-gray-800 dark:text-gray-200">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
