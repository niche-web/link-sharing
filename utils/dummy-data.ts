export const platforms = [
  "GitHub",
  "Frontend Mentor",
  "Twitter",
  "LinkedIn",
  "YouTube",
  "Facebook",
  "Twitch",
  "Dev.to",
  "Codewars",
  "CodePen",
  "FreeCodeCamp",
  "GitLab",
  "Hashnode",
  "Stack Overflow",
];

export type Platform = (typeof platforms)[number];

export const platformsUrlSlug: Record<Platform, string> = {
  GitHub: "https://github.com/",
  "Frontend Mentor": "https://frontendmentor.io/profile/",
  Twitter: "https://x.com/",
  LinkedIn: "https://linkedin.com/in/",
  YouTube: "https://youtube.com/@",
  Facebook: "https://facebook.com/",
  Twitch: "https://twitch.tv/",
  "Dev.to": "https://dev.to/",
  Codewars: "https://codewars.com/users/",
  CodePen: "https://codepen.io/",
  FreeCodeCamp: "https://freecodecamp.org/",
  GitLab: "https://gitlab.com",
  Hashnode: "https://hashnode.com",
  "Stack Overflow": `https://stackoverflow.com/users/${/\d+/}/`,
};
