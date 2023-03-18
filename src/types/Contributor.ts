type ContributorType = {
  contributor: {
    id: number;
    login: string;
    name: string;
  };
  contributions: number;
  maintainer: boolean;
  team_member: boolean;
};

export type { ContributorType };
