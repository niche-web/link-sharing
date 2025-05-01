export const slugify = (text: string, type?: "url" | "colorSlug"): string => {
  if (type === "url")
    return text.replace(" ", "-").replace(".", "").toLowerCase();
  else if (type === "colorSlug")
    return text.replace(" ", "").replace(".", "").toLowerCase();

  return text.replace(".", "").replace(" ", "-").toLowerCase();
};
