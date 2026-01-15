import type { EventItem, Locale } from "../types/content";

export type Event = {
  id: string;
  slug: string;
  date: string; // Format: YYYY-MM-DD
  title: Record<Locale, string>;
  blurb: Record<Locale, string>;
  description: Record<Locale, string>;
  location: string;
  startTime?: string;
  tags?: string[];
  venue?: string;
};

export type LocalizedEvent = EventItem & {
  description: string;
};

export const events: Event[] = [
  {
    id: "event1",
    slug: "curated-by-flujas",
    date: "2026-01-15",
    title: {
      en: "Curated by FLUJAS",
      nl: "Curated by FLUJAS",
    },
    blurb: {
      en: "With De Nieuwe Scene and Cafe Vader Klaassens for Limburg Film Festival. 21:30 Dame Du Ton (ambient art rock), later Octopus (psychedelic garage). Free entry at Vader Klaassens; first drink on FLUJAS at Creatives Café.",
      nl: "Samen met De Nieuwe Scene en Cafe Vader Klaassens voor Limburg Film Festival. 21:30 Dame Du Ton (ambient artrock), daarna Octopus (psychedelische garagerock). Gratis bij Vader Klaassens; eerste drankje van FLUJAS tijdens Creatives Café.",
    },
    description: {
      en: "Join us for an unforgettable evening as part of the Limburg Film Festival. Starting at 21:30, Dame Du Ton will perform their mesmerizing ambient art rock, followed by the psychedelic garage sounds of Octopus.\n\nFree entry at Cafe Vader Klaassens. Get your first drink on FLUJAS during Creatives Café.",
      nl: "Sluit je bij ons aan voor een onvergetelijke avond als onderdeel van het Limburg Film Festival. Om 21:30 treedt Dame Du Ton op met hun betoverende ambient artrock, gevolgd door de psychedelische garagerock van Octopus.\n\nGratis toegang bij Cafe Vader Klaassens. Je eerste drankje is van FLUJAS tijdens Creatives Café.",
    },
    location: "Venlo",
    startTime: "21:30",
    tags: ["Limburg Film Festival", "Ambient Artrock", "Psychedelic Garagerock"],
    venue: "Cafe Vader Klaassens",
  },
];

const localizeEvent = (event: Event, locale: Locale): LocalizedEvent => ({
  id: event.id,
  slug: event.slug,
  date: event.date,
  displayDate: formatEventDate(event.date, locale),
  title: event.title[locale] ?? event.title.en,
  blurb: event.blurb[locale] ?? event.blurb.en,
  description: event.description[locale] ?? event.description.en,
  location: event.location,
  startTime: event.startTime,
  tags: event.tags,
  venue: event.venue,
});

export const getEventBySlugAndDate = (slug: string, date: string): Event | undefined => {
  return events.find((event) => event.slug === slug && event.date === date);
};

export const getAllEvents = (): Event[] => {
  return [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getUpcomingEvents = (): Event[] => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Compare on date only so same-day events remain visible

  return [...events]
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getLocalizedEvents = (locale: Locale): LocalizedEvent[] => {
  return getAllEvents().map((event) => localizeEvent(event, locale));
};

export const getUpcomingEventsLocalized = (locale: Locale): LocalizedEvent[] => {
  return getUpcomingEvents().map((event) => localizeEvent(event, locale));
};

export const getFeaturedEvents = (locale: Locale, ids: string[]): LocalizedEvent[] => {
  if (!ids.length) return getLocalizedEvents(locale);
  const byId = new Set(ids);
  return getLocalizedEvents(locale).filter((event) => byId.has(event.id));
};

export const formatEventDate = (date: string, locale: Locale): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  return dateObj.toLocaleDateString(locale === "nl" ? "nl-NL" : "en-US", options);
};
