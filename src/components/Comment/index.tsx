"use client";

import Giscus from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comment() {
  const { theme } = useTheme();
  return (
    <>
      <Giscus
        id="comments"
        repo={`codinasion/comments`}
        repoId={`R_kgDOHb-6Gg`}
        category={`General`}
        categoryId={`DIC_kwDOHb-6Gs4CPbX4`}
        mapping={`url`}
        strict={`0`}
        term="Welcome to Codinasion :)"
        reactionsEnabled={`1`}
        emitMetadata={`0`}
        inputPosition={`bottom`}
        theme={theme}
        lang={`en`}
        loading={`lazy`}
      />
    </>
  );
}
