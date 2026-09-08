export type Profile = {
  name: string;
  bio: string;
  /** Image URL. When empty the avatar falls back to the first letter of the name. */
  avatarUrl?: string;
};

export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile: Profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요.",
  avatarUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", label: "🐱‍💻 GitHub", url: "https://github.com/diffth" },
  { id: "blog", label: "🎁 블로그", url: "https://blog.naver.com/diffth" },
  { id: "email", label: "🐱‍🚀 이메일", url: "mailto:diffth@nate.com" },
];
