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
  {
    id: "event2",
    slug: "southern-blues-society",
    date: "2026-03-22",
    title: {
      en: "The Southern Blues Society",
      nl: "The Southern Blues Society",
    },
    blurb: {
      en: "Electric and slide-forward blues with a Southern edge. Grab a pint and settle in for grooves and grit.",
      nl: "Elektrische blues met slide en Southern-sound. Pak een pint en leun achterover voor grooves en grit.",
    },
    description: {
      en: "The Southern Blues Society brings smoky guitars, harmonica hooks, and road-worn vocals to Venlo. Expect a set that drifts from shuffles to slow-burn ballads, all with a Southern bite.",
      nl: "The Southern Blues Society brengt rauwe gitaren, mondharmonica-hooks en doorleefde vocals naar Venlo. Reken op een set die schuift van shuffles naar slow-burn ballads, altijd met een Southern-bite.",
    },
    location: "Venlo",
    startTime: "18:00",
    tags: ["Blues", "Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event3",
    slug: "wild-karma",
    date: "2026-05-17",
    title: {
      en: "Wild Karma",
      nl: "Wild Karma",
    },
    blurb: {
      en: "Raw indie rock with sing-along hooks and plenty of fuzz. One for the front-row crowd.",
      nl: "Rauwe indierock met meezing-hooks en veel fuzz. Voor iedereen die graag vooraan staat.",
    },
    description: {
      en: "Wild Karma crashes in with driving drums, bright guitars, and choruses built to shout. A tight, energetic set that keeps the room moving from the first chord.",
      nl: "Wild Karma komt binnen met stuwende drums, felle gitaren en refreinen om mee te brullen. Een energieke set die de zaal vanaf de eerste noot in beweging houdt.",
    },
    location: "Venlo",
    startTime: "18:00",
    tags: ["Indie Rock", "Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event4",
    slug: "three-dilly-tuffys",
    date: "2026-05-24",
    title: {
      en: "Three Dilly Tuffys",
      nl: "Three Dilly Tuffys",
    },
    blurb: {
      en: "Swinging roots trio mixing folk, jazz, and barroom charm. Easy smiles, tight harmonies.",
      nl: "Swingende roots-trio met folk, jazz en kroegcharme. Luchtige sfeer, strakke harmonieën.",
    },
    description: {
      en: "Three Dilly Tuffys blend upright bass, guitar, and light percussion for a breezy roots set. Expect close harmonies, playful solos, and a room that feels like a back-porch session.",
      nl: "Three Dilly Tuffys mengen contrabas, gitaar en lichte percussie tot een luchtige roots-set. Verwacht close harmony, speelse solo's en een kroeg die voelt als een veranda-sessie.",
    },
    location: "Venlo",
    startTime: "18:00",
    tags: ["Roots", "Folk", "Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event5",
    slug: "acoustic-session",
    date: "2026-02-25",
    title: {
      en: "Acoustic Session",
      nl: "Acoustic Session",
    },
    blurb: {
      en: "Open-room acoustic night with local players trading songs and stories.",
      nl: "Akoestische avond waar lokale muzikanten songs en verhalen uitwisselen.",
    },
    description: {
      en: "A laid-back acoustic session: local songwriters and friends share originals and favorites. Low stage volume, plenty of room to listen, and an easy-going Thursday vibe.",
      nl: "Een relaxte akoestische sessie: lokale songwriters en vrienden delen eigen werk en favorieten. Laag volume, ruimte om te luisteren en een gemoedelijke donderdagvibe.",
    },
    location: "Venlo",
    startTime: "20:00",
    tags: ["Acoustic", "Songwriters"],
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
