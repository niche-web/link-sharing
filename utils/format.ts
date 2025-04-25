export const slugify = (text: string, isUrl?: boolean): string => {
  if (isUrl) return text.replace(" ", "").toLowerCase();
  return text.replace(".", "").replace(" ", "-").toLowerCase();
};
