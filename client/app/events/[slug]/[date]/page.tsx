import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventDetail from "../../../components/sections/EventDetail";
import { getEventBySlugAndDate, formatEventDate } from "../../../content/events";
import { absoluteUrl, siteName } from "../../../lib/seo";
import type { Locale } from "../../../types/content";

type PageProps = {
  params: Promise<{
    slug: string;
    date: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale: Locale = "nl";
  const { slug, date } = await params;
  const event = getEventBySlugAndDate(slug, date);

  if (!event) {
    return {
      title: `${siteName} | Event`,
    };
  }

  const title = `${event.title[locale] ?? event.title.en} | ${siteName}`;
  const description = `${formatEventDate(event.date, locale)} · ${event.location}`;
  const image = absoluteUrl(`/events/${event.id}.jpg`);
  const url = absoluteUrl(`/events/${event.slug}/${event.date}`);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "article",
      url,
      siteName,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
    const {slug, date} = await params
  const event = getEventBySlugAndDate(slug, date);

  if (!event) {
    notFound();
  }

  return <EventDetail event={event} />;
}
