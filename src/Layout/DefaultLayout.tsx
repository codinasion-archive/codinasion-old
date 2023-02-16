"use client";

import { ThemeProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
