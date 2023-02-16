import React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import MdxComponents from "./MdxComponents";

type ReactMarkdownPropsType = {
  children: string;
};

export default function ReactMarkdownComponent({
  children,
}: ReactMarkdownPropsType) {
  return (
    <>
      <ReactMarkdown
        components={MdxComponents}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        // eslint-disable-next-line react/no-children-prop
        children={children}
      />
    </>
  );
}
