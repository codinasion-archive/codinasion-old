"use client";

import { ThemeProvider } from "next-themes";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollTopButton } from "@/components/PageNavigation";

import type { SponsorType } from "@/types";

interface Props {
  children: React.ReactNode;
  featuredSponsors: SponsorType[];
}

export default function DefaultLayout({ children, featuredSponsors }: Props) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <main>{children}</main>
        <Footer featuredSponsors={featuredSponsors} />
        <ScrollTopButton />
      </ThemeProvider>
    </>
  );
}
