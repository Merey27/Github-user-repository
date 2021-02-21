export interface UserInfo {
  fullInfo: FullInfo[];
  ownerInfo: OwnerInfo[];
  reposCount: number;
  uniqueLanguages: string[];
}

export interface OwnerInfo {
  avatar_url: string;
  login: string;
  html_url: string;
}

export interface FullInfo {
  name: string;
  html_url: string;
  language: string;
  created_at: string;
}
