export const slugify = (text: string): string => {
  return text.replace(".", "").replace(" ", "-").toLowerCase();
};
