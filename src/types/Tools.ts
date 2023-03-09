type ToolType = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

type ToolTagType = {
  name: string;
  count: number;
};

export type { ToolType, ToolTagType };
