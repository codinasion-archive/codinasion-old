"use client";

import * as React from "react";

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
      {/* @ts-ignore */}
      <div ref={banner}></div>
    </>
  );
}
