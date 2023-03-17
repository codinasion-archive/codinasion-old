type Good1stIssueType = {
  issue_title: string;
  issue_author: string;
  issue_url: string;
  issue_short_url: string;
  issue_labels: string[];
};

type Good1stIssueLabelType = {
  label: string;
  issue_count: number;
};

export type { Good1stIssueType, Good1stIssueLabelType };
