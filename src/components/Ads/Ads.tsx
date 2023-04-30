"use client";

import * as React from "react";

import { BsFillInfoCircleFill } from "react-icons/bs";

type Props = {
  apiKey: string;
  width: number;
  height: number;
};

export default function Ads({ apiKey, width, height }: Props): JSX.Element {
  const banner = React.useRef<HTMLDivElement>();

  const atOptions = {
    key: apiKey,
    format: "iframe",
    width,
    height,
    params: {},
  };

  React.useEffect(() => {
    // @ts-ignore
    if (!banner.current.firstChild) {
      const conf = document.createElement("script");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `//turkstench.com/${atOptions.key}/invoke.js`;
      conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

      if (banner.current) {
        banner.current.append(conf);
        banner.current.append(script);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="card_bg p-2 rounded-md text-sm font-semibold w-full"
        style={{
          height: height + 50,
        }}
      >
        <BsFillInfoCircleFill className="inline-block mr-1 mb-1" />{" "}
        Advertisement
        <div className="flex items-center justify-center p-2">
          {/* @ts-ignore */}
          <div ref={banner}></div>
        </div>
      </div>
    </>
  );
}
