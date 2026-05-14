import type { Metadata } from "next";
import { getUpcomingEventsLocalized } from "../content/events";
import { absoluteUrl, defaultOgImage, eventOgImage, siteName } from "../lib/seo";

export function generateMetadata(): Metadata {
  const upcoming = getUpcomingEventsLocalized("nl");
  const lead = upcoming[0];

  const title = "Agenda";
  const description = lead
    ? `${lead.title} · ${lead.displayDate} · ${lead.location}. Bekijk alle aankomende avonden bij ${siteName}.`
    : `Ontdek alle aankomende avonden bij ${siteName} in Venlo — live muziek, akoestiek en meer.`;

  const image = lead ? eventOgImage(lead.id) : defaultOgImage;

  return {
    // Re-declare the template so nested route segments (e.g. /events/[slug]/[date])
    // continue to receive the "<page> | <site>" suffix. The root template doesn't
    // pass through an intermediate layout that sets its own title.
    title: { default: title, template: `%s | ${siteName}` },
    description,
    alternates: { canonical: "/events" },
    openGraph: {
      type: "website",
      url: absoluteUrl("/events"),
      siteName,
      title: `${title} | ${siteName}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: `${title} — ${siteName}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [image],
    },
  };
}

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
