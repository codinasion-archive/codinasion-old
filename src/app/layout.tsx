import Script from "next/script";

import Layout from "@/layouts";

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

  manifest: Manifest,
  icons: {
    icon: Favicon.src,
    shortcut: ShortcutIcon.src,
    apple: AppleTouchIcon.src,
    android: Logo.src,
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
      <body className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-200">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
