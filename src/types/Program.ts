type ProgramType = {
  slug: string;
  title: string;
  trackId: number;
  tags: string[];
  contributors: string[];
  latestUpdateDate: string;
};

type ProgramLanguageCountTagType = {
  name: string;
  count: number;
};

export type { ProgramType, ProgramLanguageCountTagType };
