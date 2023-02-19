type GithubUserType = {
  id: number;
  login: string;
  type: string;
  fetched: boolean;
  last_clicked_at: string;
  allowed: boolean;
  verified: boolean;
  sponsor: boolean;
  fetch_error: boolean;
};

export type { GithubUserType };
