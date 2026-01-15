import { absoluteUrl, defaultOgImage, siteName } from "../lib/seo";

export default function Head() {
  const title = `Contact | ${siteName}`;
  const description = "Contact en bezoekinformatie van Cafe Vader Klaassens in Venlo.";
  const url = absoluteUrl("/contact");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultOgImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultOgImage} />
    </>
  );
}
