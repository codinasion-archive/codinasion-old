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

type GithubUserArchiveType = {
  url: string;
  image_url: string;
  clicked_at: string;
  date: string;
};

export type { GithubUserType, GithubUserArchiveType };
