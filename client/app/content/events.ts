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
    startTime: "19:00",
    tags: ["Indie Rock", "Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event4",
    slug: "three-dilly-tuffys",
    date: "2026-05-24",
    title: {
      en: "Three Dilly Tuffys + The Mono Kids",
      nl: "Three Dilly Tuffys + The Mono Kids",
    },
    blurb: {
      en: "Swinging roots trio mixing folk, jazz, and barroom charm — with support act The Mono Kids. Easy smiles, tight harmonies.",
      nl: "Swingende roots-trio met folk, jazz en kroegcharme — met voorprogramma The Mono Kids. Luchtige sfeer, strakke harmonieën.",
    },
    description: {
      en: "Three Dilly Tuffys blend upright bass, guitar, and light percussion for a breezy roots set. Expect close harmonies, playful solos, and a room that feels like a back-porch session.\n\nSupport act The Mono Kids open the evening with their own energetic set.",
      nl: "Three Dilly Tuffys mengen contrabas, gitaar en lichte percussie tot een luchtige roots-set. Verwacht close harmony, speelse solo's en een kroeg die voelt als een veranda-sessie.\n\nVoorprogramma The Mono Kids openen de avond met hun eigen energieke set.",
    },
    location: "Venlo",
    startTime: "19:00",
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
  {
    id: "event6",
    slug: "boom-boom-beat",
    date: "2026-06-21",
    title: {
      en: "Boom Boom Beat",
      nl: "Boom Boom Beat",
    },
    blurb: {
      en: "High-energy rhythm and groove to get the whole room moving. A Sunday evening full of beat-driven fun.",
      nl: "Energiek ritme en groove om de hele zaal in beweging te krijgen. Een zondagavond vol beat-driven plezier.",
    },
    description: {
      en: "Boom Boom Beat brings a punchy, rhythm-forward live set that blends rock, soul, and raw energy. Expect heavy grooves, driving bass lines, and a sound that hits you right in the chest.\n\nFree entry — just walk in and feel the beat.",
      nl: "Boom Boom Beat brengt een strakke, ritmische liveset die rock, soul en rauwe energie mixt. Verwacht zware grooves, stuwende baslijnen en een geluid dat je recht in de borst raakt.\n\nGratis entree — loop binnen en voel de beat.",
    },
    location: "Venlo",
    startTime: "19:00",
    tags: ["Rhythm", "Groove", "Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event7",
    slug: "seekers-70",
    date: "2026-07-04",
    title: {
      en: "Seekers 70",
      nl: "Seekers 70",
    },
    blurb: {
      en: "Garage punk with gritty riffs and a no-nonsense attitude. Loud, fast, and unapologetic.",
      nl: "Garagepunk met rauwe riffs en een no-nonsense houding. Hard, snel en zonder excuses.",
    },
    description: {
      en: "Seekers 70 deliver garage punk the way it was meant to be: loud, raw, and full of attitude. Fuzzy guitars, pounding drums, and vocals that cut right through the noise.\n\nSaturday night — doors open a little later, volume a little louder.",
      nl: "Seekers 70 brengen garagepunk zoals het hoort: hard, rauw en vol attitude. Fuzzy gitaren, stampende drums en vocals die dwars door het geluid snijden.\n\nZaterdagavond — deuren open iets later, volume iets harder.",
    },
    location: "Venlo",
    startTime: "21:00",
    tags: ["Garage Punk", "Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event8",
    slug: "los-moustros-del-espacio-exterior",
    date: "2026-09-06",
    title: {
      en: "Los Moustros del Espacio Exterior",
      nl: "Los Moustros del Espacio Exterior",
    },
    blurb: {
      en: "Intergalactic surf rock and lo-fi psychedelia. A wild ride through outer space and back.",
      nl: "Intergalactische surfrock en lo-fi psychedelica. Een wilde rit door de ruimte en weer terug.",
    },
    description: {
      en: "Los Moustros del Espacio Exterior bring their cosmic blend of surf, garage, and psychedelic rock to Vader Klaassens. Reverb-drenched guitars, driving rhythms, and a stage show that feels like a B-movie come to life.\n\nFree entry as always — come explore the outer limits.",
      nl: "Los Moustros del Espacio Exterior brengen hun kosmische mix van surf, garage en psychedelische rock naar Vader Klaassens. Reverb-doordrenkte gitaren, stuwende ritmes en een podiumshow die voelt als een B-film die tot leven komt.\n\nGratis entree zoals altijd — kom de buitengrenzen verkennen.",
    },
    location: "Venlo",
    startTime: "19:00",
    tags: ["Surf Rock", "Psychedelic", "Garage"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event9",
    slug: "rhine-valley-ramblers-junior-marvel",
    date: "2026-10-04",
    title: {
      en: "Rhine Valley Ramblers + Junior Marvel & His HiFlyers",
      nl: "Rhine Valley Ramblers + Junior Marvel & His HiFlyers",
    },
    blurb: {
      en: "Double bill: rockabilly from the Rhine Valley Ramblers and high-flying rock 'n' roll from Junior Marvel & His HiFlyers.",
      nl: "Dubbele line-up: rockabilly van de Rhine Valley Ramblers en vliegende rock-'n-roll van Junior Marvel & His HiFlyers.",
    },
    description: {
      en: "Two acts, one evening of pure rockabilly and rock 'n' roll energy. Rhine Valley Ramblers bring slap bass, twangy guitars, and a hillbilly stomp that gets the whole room swinging.\n\nJunior Marvel & His HiFlyers follow up with their own brand of high-octane rock 'n' roll — think pompadours, stand-up bass, and guitar solos that don't quit.",
      nl: "Twee acts, één avond vol rockabilly en rock-'n-roll-energie. Rhine Valley Ramblers brengen slapbas, twangy gitaren en een hillbilly-stomp die de hele kroeg laat swingen.\n\nJunior Marvel & His HiFlyers volgen met hun eigen high-octane rock-'n-roll — denk aan kuiven, contrabas en gitaarsolo's die maar doorgaan.",
    },
    location: "Venlo",
    startTime: "19:00",
    tags: ["Rockabilly", "Rock 'n' Roll", "Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event10",
    slug: "the-sick-rose",
    date: "2026-12-06",
    title: {
      en: "The Sick Rose",
      nl: "The Sick Rose",
    },
    blurb: {
      en: "60's garage from Turin, Italy. Raw, vintage, and dripping with attitude.",
      nl: "60's garage uit Turijn, Italië. Rauw, vintage en druipend van attitude.",
    },
    description: {
      en: "All the way from Turin, Italy — The Sick Rose bring their legendary 60's garage sound to Venlo. Fuzz-soaked guitars, pounding organ, and a vocal snarl that takes you straight back to 1966.\n\nA rare chance to catch one of Europe's finest garage acts in an intimate cafe setting.",
      nl: "Helemaal uit Turijn, Italië — The Sick Rose brengen hun legendarische 60's garagegeluid naar Venlo. Fuzz-doorweekte gitaren, dreunend orgel en een rinkelende vocal die je regelrecht terug naar 1966 brengt.\n\nEen zeldzame kans om een van Europa's beste garage-acts te zien in een intieme kroeg-setting.",
    },
    location: "Venlo",
    startTime: "19:00",
    tags: ["60's Garage", "Live Music", "International"],
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
  today.setHours(0, 0, 0, 0);

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

export const getNextUpcomingEvents = (locale: Locale, count: number = 3): LocalizedEvent[] => {
  return getUpcomingEventsLocalized(locale).slice(0, count);
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
