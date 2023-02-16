import React from "react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  node: any;
  inline: boolean;
  className: string;
  children: any;
  [key: string]: any;
};

function Code({ node, inline, className, children, ...props }: Props) {
  const match = /language-(\w+)/.exec(className || "");

  return !inline && match ? (
    <>
      <SyntaxHighlighter
        language={match[1]}
        style={dracula}
        lineProps={{ style: { whiteSpace: "pre-wrap", flexWrap: "wrap" } }}
        wrapLines={false}
        PreTag="div"
        showLineNumbers={true}
        customStyle={{
          borderRadius: "0.5rem",
          padding: "1rem",
          margin: "1rem 0",
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </>
  ) : (
    <>
      <kbd className="bg-gray-200 dark:bg-gray-700 rounded-md px-2 pt-1 font-mono">
        {String(children).replace(/\n$/, "")}
      </kbd>
    </>
  );
}

export default Code;
