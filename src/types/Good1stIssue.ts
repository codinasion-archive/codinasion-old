type Good1stIssueType = {
  issue_title: string;
  issue_author: string;
  issue_url: string;
  issue_short_url: string;
  issue_labels: string[];
};

type TagType = {
  label: string;
  issue_count: number;
};

export type { Good1stIssueType, TagType };
