// Note: Popunder Ads
// Show: Once per day
// Don't show: First time visitor

"use client";

import * as React from "react";

import Script from "next/script";

export default function Popunder() {
  const [showPopunder, setShowPopunder] = React.useState(false);
  const [firstTimeVisitor, setFirstTimeVisitor] = React.useState(true);

  React.useEffect(() => {
    const firstTimeVisitor = localStorage.getItem("firstTimeVisitor");
    if (!firstTimeVisitor) {
      localStorage.setItem("firstTimeVisitor", "true");
    } else {
      setFirstTimeVisitor(false);
      localStorage.setItem("firstTimeVisitor", "false");
      const lastPopunder = localStorage.getItem("lastPopunder");
      if (!lastPopunder) {
        setShowPopunder(true);
        localStorage.setItem("lastPopunder", Date.now().toString());
      } else {
        const lastPopunderDate = new Date(parseInt(lastPopunder));
        const now = new Date();
        const diff = now.getTime() - lastPopunderDate.getTime();
        const diffHours = Math.floor(diff / 1000 / 60 / 60);
        if (diffHours > 24) {
          setShowPopunder(true);
          localStorage.setItem("lastPopunder", Date.now().toString());
        } else {
          setShowPopunder(false);
        }
      }
    }
  }, []);

  if (!showPopunder || firstTimeVisitor) {
    return null;
  }

  return (
    <>
      <Script
        src="//turkstench.com/cf/2d/c6/cf2dc63b9191ecdb02e5b1506090fa29.js"
        strategy="afterInteractive"
      />
    </>
  );
}
