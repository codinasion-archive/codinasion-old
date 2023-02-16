import Link from "next/link";
import Image from "next/image";

import { BsTwitter, BsGithub, BsDiscord } from "react-icons/bs";

import Logo from "@/public/logo.png";
import SiteMetaData from "@/data/SiteMetaData";
import FooterLinks from "@/data/FooterLinks";
import type { FooterLinkType, FooterLinksType } from "@/types";

export default function DefaultFooter() {
  return (
    <>
      <footer className="p-4 sm:p-6">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image
                  src={Logo}
                  className="mr-3 rounded-md"
                  alt={SiteMetaData.title}
                  width={32}
                  height={32}
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap">
                  {SiteMetaData.title}
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              {FooterLinks.map((footerLink: FooterLinksType) => (
                <div key={footerLink.title}>
                  <h2 className="mb-6 text-sm font-semibold uppercase">
                    {footerLink.title.toUpperCase()}
                  </h2>
                  <ul className="text-gray-600 dark:text-gray-400">
                    {footerLink.links.map((link: FooterLinkType) => (
                      <li className="mb-4" key={link.title}>
                        <Link href={link.url} className="hover:underline">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              Made with ❤️ by{" "}
              <Link
                href={SiteMetaData.github_url}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <b>{SiteMetaData.title}</b>
              </Link>
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <Link
                href={SiteMetaData.github_url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <BsGithub className="w-5 h-5" />
              </Link>
              <Link
                href={SiteMetaData.twitter_url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <BsTwitter className="w-5 h-5" />
              </Link>
              <Link
                href={SiteMetaData.discord_url}
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <BsDiscord className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
