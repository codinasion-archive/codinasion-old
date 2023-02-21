import * as React from "react";

import languages from "@/data/languages.json";
import fileNaming from "@/scripts/fileNaming";

type Props = {
  node: any;
  inline: boolean;
  className: string;
  children: any;
  slug: string;
  [key: string]: any;
};

export default function CodeBlock({
  children,
  className,
  slug,
  ...props
}: Props) {
  const [blocks, setBlocks] = React.useState<any>([]);
  const [tabs, setTabs] = React.useState<any>([]);
  const [filenames, setFilenames] = React.useState<any>([]);
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const makeblock = () => {
    children.map(async (child: any) => {
      if (child.type === "pre") {
        let className = child.props.children[0].props.className;

        let language = className.split("-")[1];

        let tag = language;

        let languageData = languages.filter(
          (lang: any) => lang.fileExtension === language
        )[0];

        if (languageData) {
          tag = languageData.name;
        }

        let filename = slug.replaceAll("-", " ");
        let file = await fileNaming(filename, languageData);

        setBlocks((prevBlocks: []) => [...prevBlocks, child]);
        setTabs((prevTabs: []) => [...prevTabs, tag]);
        setFilenames((prevFilenames: []) => [...prevFilenames, file]);
      }
    });
  };

  React.useEffect(() => {
    makeblock();

    return () => makeblock();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="my-2 p-2 rounded-lg bg-gray-200">
      <div>
        {tabs.map((tab: any, index: number) => {
          return (
            <button
              key={index}
              onClick={(e) => handleChange(e, index)}
              className={`btn text-sm m-1 p-1 rounded-md ${
                value === index
                  ? "bg-green-500 dark:bg-green-400"
                  : "bg-green-300 dark:bg-green-500"
              }`}
              disabled={value === index}
            >
              {tab}
            </button>
          );
        })}
      </div>
      <div>
        <div>{blocks[value]}</div>
      </div>
    </div>
  );
}
