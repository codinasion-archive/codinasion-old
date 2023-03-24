import Link from "@/components/Link";

import Code from "./Code";
import CodeBlock from "./CodeBlock";

type CodeBlockProps = {
  children: React.ReactNode;
  className?: string;
  node: any;
  inline: boolean;
  slug: string;
};

type CodeProps = {
  children: React.ReactNode;
  className?: string;
  node: any;
  inline?: boolean; // make inline optional and give it a default value of false
};

const MdxComponents = {
  // Text
  h1: (props: any) => (
    <>
      <h1 className="text-3xl font-bold" {...props} />
      <hr className="mt-2 mb-5 sm:mx-auto border-gray-400 dark:border-gray-600" />
    </>
  ),
  h2: (props: any) => (
    <>
      <h2 className="text-2xl font-bold pt-4" {...props} />
      <hr className="mt-2 mb-5 sm:mx-auto border-gray-400 dark:border-gray-600" />
    </>
  ),
  h3: (props: any) => (
    <>
      <h3 className="text-xl pt-4 mb-2 font-bold" {...props} />
    </>
  ),
  h4: (props: any) => <h4 className="text-lg my-2 font-bold" {...props} />,
  h5: (props: any) => <h5 className="text-md my-2 font-bold" {...props} />,
  h6: (props: any) => <h6 className="text-sm my-2 font-bold" {...props} />,
  p: (props: any) => <p className="mt-2 mb-4 text-base" {...props} />,
  strong: (props: any) => <strong className="font-bold" {...props} />,
  em: (props: any) => <em className="italic" {...props} />,
  del: (props: any) => <del className="line-through" {...props} />,

  // Link
  a: (props: any) => (
    <Link
      className="text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
      {...props}
    />
  ),

  // List
  ul: (props: any) => <ul className="list-disc pl-8" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-8" {...props} />,
  li: (props: any) => <li className="my-2" {...props} />,
  dl: (props: any) => <dl className="my-2" {...props} />,
  dt: (props: any) => <dt className="my-2" {...props} />,
  dd: (props: any) => <dd className="my-2" {...props} />,

  // Code
  code: (
    { children, className = "", inline = false, ...props }: CodeProps // pass inline prop to Code with a default value of false
  ) => (
    <Code inline={inline} className={className} {...props}>
      {children}
    </Code>
  ),
  codeblock: ({
    children,
    className = "",
    slug = "code-blocks",
    ...props
  }: CodeBlockProps) => (
    <CodeBlock className={className} slug={slug} {...props}>
      {children}
    </CodeBlock>
  ),

  // Table
  table: (props: any) => (
    <table className="mt-2 mb-5 table-auto w-full" {...props} />
  ),
  thead: (props: any) => <thead className="font-bold" {...props} />,
  tbody: (props: any) => (
    <tbody className="text-gray-700 dark:text-gray-200" {...props} />
  ),
  tr: (props: any) => <tr {...props} />,
  th: (props: any) => (
    <th
      className="px-4 py-2 border border-gray-300 dark:border-gray-600"
      {...props}
    />
  ),
  td: (props: any) => (
    <td
      className="px-4 py-2 border border-gray-300 dark:border-gray-600"
      {...props}
    />
  ),

  // Blockquote
  blockquote: (props: any) => (
    <blockquote
      className="px-4 py-2 my-2 border-l-4 border-gray-300 dark:border-gray-600"
      {...props}
    />
  ),

  // Horizontal Rule
  hr: (props: any) => (
    <hr className="my-4 border-gray-400 dark:border-gray-600" {...props} />
  ),
};

export default MdxComponents;
