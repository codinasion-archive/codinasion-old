import * as React from "react";

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

        setBlocks((prevBlocks: []) => [...prevBlocks, child]);
        setTabs((prevTabs: []) => [...prevTabs, tag]);
      }
    });
  };

  React.useEffect(() => {
    makeblock();

    return () => makeblock();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="my-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-700">
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
