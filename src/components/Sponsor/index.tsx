"use client";

import React from "react";

import Image from "@/components/Image";
import Link from "@/components/Link";

import { BsInfoCircleFill } from "react-icons/bs";
import { BiHide, BiShow } from "react-icons/bi";
import { SiGithubsponsors } from "react-icons/si";

import { getSponsorData, SiteMetadata } from "@/data";

export default function Sponsor() {
  const [preview, setPreview] = React.useState(false);
  const [SponsorData] = React.useState(getSponsorData());

  React.useEffect(() => {
    if (SponsorData.default !== true) {
      setPreview(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="block p-5 mb-5 rounded-md shadow-xl card_bg">
        <div className="w-full mb-3 text-yellow-600">
          <BsInfoCircleFill className="inline-block text-xl pb-1" />
          <h5 className="inline-block text-base md:text-base font-bold text-center ml-1">
            Sponsor
          </h5>
        </div>
        {preview && (
          <>
            <Link href={SponsorData.link} externalIcon={false}>
              <Image
                src={SponsorData.logo}
                alt={SponsorData.name}
                className="rounded w-full"
                height={500}
                width={500}
              />
              <h5 className="text-lg md:text-xl font-bold text-center pt-5">
                {SponsorData.name}
              </h5>
              <h6 className="text-sm md:text-base text-muted text-center pt-2">
                {SponsorData.description}
              </h6>
            </Link>
          </>
        )}
        {SponsorData.default === true && (
          <>
            <div className="mt-5">
              <button
                className="block w-full text-center text-sm bg-yellow-400 p-2 rounded-md text-white"
                onClick={() => setPreview(!preview)}
              >
                {preview ? (
                  <>
                    <BiHide className="inline-block w-5 h-5 pb-1" /> Hide
                    Preview
                  </>
                ) : (
                  <>
                    <BiShow className="inline-block w-5 h-5 pb-1" /> Preview
                    Sponsor
                  </>
                )}
              </button>
              <Link
                className="block w-full text-center text-sm bg-rose-300 p-2 rounded-md text-white mt-4"
                href={SiteMetadata.program_sponsor_url}
                externalIcon={false}
              >
                <SiGithubsponsors className="inline-block w-5 h-5 text-base text-rose-500" />{" "}
                <span className="font-bold pl-1">Sponsor This Project</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
