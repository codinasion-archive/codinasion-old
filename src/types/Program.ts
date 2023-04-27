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

type ProgramCodeType = {
  language: ProgramLanguageType;
  code: string;
};

type ProgramDetailType = {
  id: number;
  slug: string;
  description: string;
  track_id: number;
  last_updated: string;
  languages: string[];
  contributors: string[];
  codes: ProgramCodeType[];
};

export type {
  ProgramType,
  ProgramLanguageType,
  ProgramCodeType,
  ProgramDetailType,
};
