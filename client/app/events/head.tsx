import { getUpcomingEventsLocalized } from "../content/events";
import type { Locale } from "../types/content";
import { absoluteUrl, defaultOgImage, siteName } from "../lib/seo";

export default function Head() {
  const locale: Locale = "nl";
  const upcoming = getUpcomingEventsLocalized(locale);
  const leadEvent = upcoming[0];

  const title = `${locale === "nl" ? "Agenda" : "Events"} | ${siteName}`;
  const description = leadEvent
    ? `${leadEvent.title} · ${leadEvent.displayDate} · ${leadEvent.location}`
    : "Ontdek alle aankomende avonden bij Cafe Vader Klaassens.";

  const image = leadEvent ? absoluteUrl(`/events/${leadEvent.id}.jpg`) : defaultOgImage;
  const url = absoluteUrl("/events");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
}
