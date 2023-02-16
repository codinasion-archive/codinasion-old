import "./globals.css";

import Layout from "@/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
