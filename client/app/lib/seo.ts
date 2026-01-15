const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://cafevaderklaassens.nl";

export const absoluteUrl = (path: string = "/"): string => {
  try {
    return new URL(path, DEFAULT_SITE_URL).toString();
  } catch (error) {
    return DEFAULT_SITE_URL;
  }
};

export const defaultOgImage = absoluteUrl("/file.svg");
export const siteName = "Cafe Vader Klaassens";
export const siteDescription = "Officiele website van Cafe Vader Klaassens in Venlo.";
