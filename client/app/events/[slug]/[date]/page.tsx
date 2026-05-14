import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetail from "../../../components/sections/EventDetail";
import {
  formatEventDate,
  getAllEvents,
  getEventBySlugAndDate,
} from "../../../content/events";
import {
  absoluteUrl,
  defaultOgImage,
  eventJsonLd,
  eventOgImage,
  siteName,
} from "../../../lib/seo";
import type { Locale } from "../../../types/content";

type PageProps = {
  params: Promise<{
    slug: string;
    date: string;
  }>;
};

export async function generateStaticParams() {
  return getAllEvents().map((event) => ({
    slug: event.slug,
    date: event.date,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale: Locale = "nl";
  const { slug, date } = await params;
  const event = getEventBySlugAndDate(slug, date);

  if (!event) {
    const title = "Event";
    const description = `Event bij ${siteName}.`;
    return {
      title,
      description,
      alternates: { canonical: `/events/${slug}/${date}` },
      openGraph: {
        type: "article",
        url: absoluteUrl(`/events/${slug}/${date}`),
        siteName,
        title: `${title} | ${siteName}`,
        description,
        images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteName }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${title} | ${siteName}`,
        description,
        images: [defaultOgImage],
      },
    };
  }

  const eventTitle = event.title[locale] ?? event.title.en;
  const blurb = event.blurb[locale] ?? event.blurb.en;
  const formattedDate = formatEventDate(event.date, locale);
  const description = `${formattedDate} · ${event.location} · ${blurb}`;
  const image = eventOgImage(event.id);
  const url = absoluteUrl(`/events/${event.slug}/${event.date}`);

  return {
    title: eventTitle,
    description,
    alternates: { canonical: `/events/${event.slug}/${event.date}` },
    openGraph: {
      type: "article",
      url,
      siteName,
      title: `${eventTitle} | ${siteName}`,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: eventTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${eventTitle} | ${siteName}`,
      description,
      images: [image],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug, date } = await params;
  const event = getEventBySlugAndDate(slug, date);

  if (!event) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(event)) }}
      />
      <EventDetail event={event} />
    </>
  );
}
