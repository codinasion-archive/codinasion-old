type ProgramType = {
  id: number;
  slug: string;
  track_id: number;
  last_updated: string;
  languages: string[];
  contributors: string[];
};

type ProgramLanguageType = {
  name: string;
  extension: string;
  naming_convention: string;
  prismTag: string;
  logo: string;
};

export type { ProgramType, ProgramLanguageType };
