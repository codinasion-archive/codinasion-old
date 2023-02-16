"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { HiBars3, HiXMark } from "react-icons/hi2";

import { Dialog } from "@headlessui/react";

import Logo from "@/public/logo.png";

import SiteMetaData from "@/data/SiteMetaData";

import NavbarLinks from "@/data/NavbarLinks";
import type { NavbarLinkType } from "@/data/NavbarLinks";

import DarkModeToggle from "./DarkModeToggle";

export default function DefaultNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <header>
        <nav className="px-4 lg:px-6 py-4">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                className="mr-3 rounded-md"
                alt={SiteMetaData.title}
                width={32}
                height={32}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-gray-100">
                {SiteMetaData.title}
              </span>
            </Link>

            <div className="flex items-center lg:order-2">
              <DarkModeToggle />
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden border-transparent focus:border-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <HiBars3 className="w-6 h-6" />
              </button>
            </div>

            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {NavbarLinks.map((link: NavbarLinkType) => (
                  <li key={link.title}>
                    <Link
                      href={link.url}
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Drawer */}
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto px-6 py-4 lg:hidden bg-white dark:bg-gray-900">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center">
                    <Image
                      src={Logo}
                      className="mr-3 rounded-md"
                      alt={SiteMetaData.title}
                      width={32}
                      height={32}
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                      {SiteMetaData.title}
                    </span>
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700 border-gray-100 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <HiXMark className="h-6 w-6 outline-0" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {NavbarLinks.map((link) => (
                        <Link
                          key={link.title}
                          href={link.url}
                          className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:bg-gray-400/20 text-gray-800 dark:text-gray-300"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </nav>
      </header>
    </>
  );
}