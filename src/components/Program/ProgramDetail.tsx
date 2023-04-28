import { ProgramDetailType, ProgramCodeType } from "@/types";

import MarkdownPreview from "@/components/MarkdownPreview";

type ProgramDetailProps = {
  ProgramData: ProgramDetailType;
  language?: string;
};

export default function ProgramDetail({
  ProgramData,
  language,
}: ProgramDetailProps) {
  return (
    <>
      <MarkdownPreview>
        {`# ${ProgramData.slug
          .replace(/-/g, " ")
          .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))}

${
  language
    ? ProgramData.description.replace(
        "Write a program to ",
        `Write a ${language
          .replace(/\-sharp/g, "#")
          .replace(/\-plus/g, "+")
          .replace(/\w\S*/g, (w) =>
            w.replace(/^\w/, (c) => c.toUpperCase())
          )} program to `
      )
    : ProgramData.description
}

${
  language
    ? ProgramData.codes
        .filter(
          (code: ProgramCodeType) =>
            code.language.name ===
            language.replace(/\-sharp/g, "#").replace(/\-plus/g, "+")
        )
        .map((code: ProgramCodeType) => {
          return `\`\`\`${code.language.prismTag}
${code.code}
\`\`\``;
        })
        .join("\n")
    : `<codeblock slug="${ProgramData.slug}">

        ${ProgramData.codes
          .map((code: ProgramCodeType) => {
            return `\`\`\`${code.language.prismTag}
${code.code}
\`\`\``;
          })
          .join("\n")}
        
</codeblock>`
}

---

`}
      </MarkdownPreview>
    </>
  );
}
