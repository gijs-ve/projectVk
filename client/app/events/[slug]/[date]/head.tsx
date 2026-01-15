import { absoluteUrl, defaultOgImage, siteName } from "../../../lib/seo";
import { formatEventDate, getEventBySlugAndDate } from "../../../content/events";
import type { Locale } from "../../../types/content";

type HeadProps = {
  params: { slug: string; date: string };
};

export default function Head({ params }: HeadProps) {
  const locale: Locale = "nl";
  const event = getEventBySlugAndDate(params.slug, params.date);

  if (!event) {
    const fallbackTitle = `${siteName} | Event`;
    const fallbackDescription = "Event bij Cafe Vader Klaassens.";
    const fallbackUrl = absoluteUrl(`/events/${params.slug}/${params.date}`);

    return (
      <>
        <title>{fallbackTitle}</title>
        <meta name="description" content={fallbackDescription} />
        <meta property="og:title" content={fallbackTitle} />
        <meta property="og:description" content={fallbackDescription} />
        <meta property="og:image" content={defaultOgImage} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={fallbackUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fallbackTitle} />
        <meta name="twitter:description" content={fallbackDescription} />
        <meta name="twitter:image" content={defaultOgImage} />
      </>
    );
  }

  const titleText = `${event.title[locale] ?? event.title.en} | ${siteName}`;
  const formattedDate = formatEventDate(event.date, locale);
  const description = `${formattedDate} · ${event.location} · ${event.blurb[locale] ?? event.blurb.en}`;
  const image = absoluteUrl(`/events/${event.id}.jpg`);
  const url = absoluteUrl(`/events/${event.slug}/${event.date}`);

  return (
    <>
      <title>{titleText}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={titleText} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={titleText} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
