import Link from "@/components/Link";
import Image from "next/image";

import { BsTwitter, BsGithub, BsDiscord } from "react-icons/bs";

import Logo from "@/public/logo.png";
import PoweredByVercel from "@/public/powered-by-vercel.svg";
import SiteMetaData from "@/data/SiteMetaData";
import FooterLinks from "@/data/FooterLinks";
import type { FooterLinkType, FooterLinksType } from "@/types";

export default function DefaultFooter() {
  return (
    <>
      <footer className="my-6 px-4 md:px-10">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center justify-start">
              <Image
                src={Logo}
                alt="Logo"
                width={32}
                height={32}
                className="rounded mx-2"
              />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                {SiteMetaData.title}
              </h1>
            </div>

            <div className="p-2 my-4">
              <p className="mr-4 text-gray-500 dark:text-gray-400">
                {SiteMetaData.description}
              </p>
            </div>

            <div className="p-2 my-2">
              <h2 className="text-lg font-bold">Social Links</h2>
              <div className="flex items-center justify-start py-3 space-x-4">
                <Link href={SiteMetaData.github_url}>
                  <BsGithub className="text-2xl text-gray-500 dark:text-gray-400" />
                </Link>
                <Link href={SiteMetaData.twitter_url}>
                  <BsTwitter className="text-2xl text-gray-500 dark:text-gray-400" />
                </Link>
                <Link href={SiteMetaData.discord_url}>
                  <BsDiscord className="text-2xl text-gray-500 dark:text-gray-400" />
                </Link>
              </div>
            </div>

            <div className="p-2 my-2">
              <h2 className="text-lg font-bold">Sponsors</h2>
              <div className="py-4">
                <Link
                  href="https://github.com/sponsors/codinasion"
                  className="font-bold py-2 px-4 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 rounded-md"
                >
                  Become a sponsor
                </Link>
              </div>
            </div>

            <div className="p-2 my-2">
              <Link href="https://vercel.com/?utm_source=codinasion&utm_campaign=oss">
                <Image
                  src={PoweredByVercel}
                  alt="Powered by Vercel"
                  width={170}
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMq66uBwAEqAHl/evvtQAAAABJRU5ErkJggg=="
                  placeholder="blur"
                />
              </Link>
            </div>
          </div>

          {FooterLinks.map((FooterLink: FooterLinksType) => (
            <div key={FooterLink.title}>
              <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                {FooterLink.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {FooterLink.links.map((link: FooterLinkType) => (
                  <li className="text-md" key={link.title}>
                    <Link href={link.url}>{link.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-gray-200 sm:mx-auto dark:border-gray-700" />

        <div className="flex flex-col items-center justify-center py-6">
          <p className="text-md text-gray-500 dark:text-gray-400">
            Made with ❤️ by{" "}
            <Link
              href={SiteMetaData.github_url}
              className="font-bold text-gray-800 dark:text-gray-200"
            >
              {SiteMetaData.title}
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
