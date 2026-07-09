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
      en: "Swinging roots trio mixing folk, jazz, and barroom charm — with support act The Mono Kids (garage punk from Brabant). Easy smiles, tight harmonies.",
      nl: "Swingende roots-trio met folk, jazz en kroegcharme — met voorprogramma The Mono Kids (garagepunk uit Brabant). Luchtige sfeer, strakke harmonieën.",
    },
    description: {
      en: "Three Dilly Tuffys blend upright bass, guitar, and light percussion for a breezy roots set. Expect close harmonies, playful solos, and a room that feels like a back-porch session.\n\nSupport act The Mono Kids — a garage punk duo from Brabant — open the evening with their own raw, high-energy set.",
      nl: "Three Dilly Tuffys mengen contrabas, gitaar en lichte percussie tot een luchtige roots-set. Verwacht close harmony, speelse solo's en een kroeg die voelt als een veranda-sessie.\n\nVoorprogramma The Mono Kids — een garagepunk-duo uit Brabant — openen de avond met hun eigen rauwe, energieke set.",
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
      en: "Italian garage punk featuring Luca Re of The Sick Rose on vocals. Gritty riffs and a no-nonsense attitude.",
      nl: "Italiaanse garagepunk met Luca Re van The Sick Rose op zang. Rauwe riffs en een no-nonsense houding.",
    },
    description: {
      en: "Seekers 70 — featuring Luca Re (The Sick Rose), Mauro Bianco on guitars, Erica Vota on bass, Manfredi Beltramo on drums, and Simona Ghigo on piano — deliver garage punk the way it was meant to be: loud, raw, and full of attitude.\n\nSaturday night — doors open a little later, volume a little louder.",
      nl: "Seekers 70 — met Luca Re (The Sick Rose), Mauro Bianco op gitaar, Erica Vota op bas, Manfredi Beltramo op drums en Simona Ghigo op piano — brengen garagepunk zoals het hoort: hard, rauw en vol attitude.\n\nZaterdagavond — deuren open iets later, volume iets harder.",
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
      en: "Rock 'n' roll and soul from Culiacán, Mexico. Golden era rock reinterpreted with cosmic energy since 2006.",
      nl: "Rock-'n-roll en soul uit Culiacán, Mexico. Gouden-tijdperk rock geherinterpreteerd met kosmische energie sinds 2006.",
    },
    description: {
      en: "All the way from Culiacán, Sinaloa — Los Moustros del Espacio Exterior bring their tribute to the golden era of rock 'n' roll to Venlo. Since 2006 they've been reinterpreting the greats: Little Richard, Eddie Cochran, Carl Perkins, Chuck Berry, Ritchie Valens, and more.\n\nExpect high-energy rock 'n' roll with a cosmic Mexican twist. Free entry as always.",
      nl: "Helemaal uit Culiacán, Sinaloa — Los Moustros del Espacio Exterior brengen hun eerbetoon aan het gouden tijdperk van rock-'n-roll naar Venlo. Sinds 2006 herinterpreteren ze de groten: Little Richard, Eddie Cochran, Carl Perkins, Chuck Berry, Ritchie Valens en meer.\n\nVerwacht energieke rock-'n-roll met een kosmische Mexicaanse twist. Gratis entree zoals altijd.",
    },
    location: "Venlo",
    startTime: "19:00",
    tags: ["Rock 'n' Roll", "Soul", "Mexico"],
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
      en: "Double bill: traditional rockabilly from Austria's Rhine Valley Ramblers and Elvis-influenced rock 'n' roll from the Dutch Junior Marvel & His HiFlyers.",
      nl: "Dubbele line-up: traditionele rockabilly uit Oostenrijk van de Rhine Valley Ramblers en Elvis-geïnspireerde rock-'n-roll van de Nederlandse Junior Marvel & His HiFlyers.",
    },
    description: {
      en: "Two acts, one evening of pure rockabilly and rock 'n' roll energy. Rhine Valley Ramblers — a tight outfit from Dornbirn, Austria (formed 2019) — bring clean, melodic rockabilly with stand-up bass, twangy guitars, and mostly original compositions. They've played international weekenders across Europe.\n\nJunior Marvel & His HiFlyers — fronted by Frank Marques (formerly of the Bellhops) from the Netherlands — follow up with Elvis-influenced rockabilly and rock 'n' roll. A voice as energetic as Johnny Burnette, a feel like early Elvis. Released on Bear Family Records and El Toro Records.",
      nl: "Twee acts, één avond vol rockabilly en rock-'n-roll-energie. Rhine Valley Ramblers — een strak gezelschap uit Dornbirn, Oostenrijk (opgericht in 2019) — brengen cleane, melodieuze rockabilly met contrabas, twangy gitaren en voornamelijk eigen composities. Ze hebben op internationale weekenders door heel Europa gespeeld.\n\nJunior Marvel & His HiFlyers — met frontman Frank Marques (voorheen bij de Bellhops) uit Nederland — volgen met Elvis-geïnspireerde rockabilly en rock-'n-roll. Een stem zo energiek als Johnny Burnette, een gevoel als de jonge Elvis. Uitgebracht op Bear Family Records en El Toro Records.",
    },
    location: "Venlo",
    startTime: "19:00",
    tags: ["Rockabilly", "Rock 'n' Roll", "Austria", "Netherlands"],
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
      en: "Legendary 60's garage from Turin, Italy. Active since 1983 — among the first European garage bands with global impact.",
      nl: "Legendarische 60's garage uit Turijn, Italië. Actief sinds 1983 — een van de eerste Europese garagebands met wereldwijde impact.",
    },
    description: {
      en: "All the way from Turin — The Sick Rose have been a cornerstone of European garage rock since 1983. Led by Luca Re on vocals and Diego Mese on guitar, they were among the first European garage bands (alongside Greece's The Last Drive) to make a global impact in the same way as The Chesterfield Kings.\n\nTheir sound ranges from raw 60's garage rock to R&B and power pop. They've shared stages with legends like The Fuzztones, Dream Syndicate, and The Nomads. Their seventh album Someplace Better was released in 2018 on Area Pirata Records.\n\nA rare chance to catch one of Europe's finest garage acts in an intimate cafe setting.",
      nl: "Helemaal uit Turijn — The Sick Rose zijn al sinds 1983 een hoeksteen van de Europese garagerock. Met Luca Re op zang en Diego Mese op gitaar waren ze een van de eerste Europese garagebands (naast The Last Drive uit Griekenland) die wereldwijd impact maakten, op hetzelfde niveau als The Chesterfield Kings.\n\nHun geluid varieert van rauwe 60's garagerock tot R&B en powerpop. Ze hebben het podium gedeeld met legendes als The Fuzztones, Dream Syndicate en The Nomads. Hun zevende album Someplace Better verscheen in 2018 op Area Pirata Records.\n\nEen zeldzame kans om een van Europa's beste garage-acts te zien in een intieme kroegsetting.",
    },
    location: "Venlo",
    startTime: "21:00",
    tags: ["60's Garage", "R&B", "Turin"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event11",
    slug: "eamonn-mccormack",
    date: "2026-04-26",
    title: {
      en: "Eamonn McCormack (IRE)",
      nl: "Eamonn McCormack (IRE)",
    },
    blurb: {
      en: "Dublin-born blues-rock guitarist and singer-songwriter bringing his heartfelt, power-trio sound to Venlo on a Sunday evening.",
      nl: "Blues-rockgitarist en singer-songwriter uit Dublin brengt zijn doorleefde power-trio-sound op zondagavond naar Venlo.",
    },
    description: {
      en: "All the way from Dublin — Eamonn McCormack is an Irish blues-rock guitarist and singer-songwriter whose career has taken him from church folk masses to the main stage of Rockpalast. Early influences like Rory Gallagher, Jimi Hendrix, and Thin Lizzy shaped a style that's raw, melodic, and unmistakably his own.\n\nFormerly recording under the name Samuel Eddy, Eamonn has shared stages with Rory Gallagher, Johnny Winter, Jan Akkerman, Walter Trout, and Nils Lofgren, and opened for ZZ Top in Amsterdam. His album Storyteller hit No. 1 on blues charts in over half a dozen countries, and his latest self-titled album Eamonn McCormack charted high across Europe.\n\nExpect a true power-trio set: heart-felt passion, electrifying guitar work, and songs that tell stories — the hallmarks of a real Irish music legend in the making.",
      nl: "Helemaal uit Dublin — Eamonn McCormack is een Ierse blues-rockgitarist en singer-songwriter wiens carrière hem bracht van folk-missen in de kerk tot het hoofdpodium van Rockpalast. Vroege invloeden als Rory Gallagher, Jimi Hendrix en Thin Lizzy vormden een stijl die rauw, melodieus en onmiskenbaar eigen is.\n\nEerder uitgebracht onder de naam Samuel Eddy, deelde Eamonn het podium met Rory Gallagher, Johnny Winter, Jan Akkerman, Walter Trout en Nils Lofgren, en opende hij voor ZZ Top in Amsterdam. Zijn album Storyteller stond op nummer 1 in de blueslijsten van meer dan zes landen, en zijn nieuwste titelloze album Eamonn McCormack scoorde hoog in heel Europa.\n\nVerwacht een echte power-trio-set: doorleefde passie, elektriserend gitaarwerk en songs die verhalen vertellen — de kenmerken van een nieuwe Ierse muzieklegende.",
    },
    location: "Venlo",
    startTime: "19:00",
    tags: ["Blues Rock", "Ireland", "Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event12",
    slug: "sil-de-schippers",
    date: "2026-07-17",
    title: {
      en: "Sil & de Schippers",
      nl: "Sil & de Schippers",
    },
    blurb: {
      en: "An early-evening live show at Cafe Vader Klaassens. Doors open, drinks flow, music starts at 17:00.",
      nl: "Een liveoptreden vroeg op de avond bij Cafe Vader Klaassens. Deuren open, drankjes op tafel, muziek start om 17:00.",
    },
    description: {
      en: "Sil & de Schippers play an early live set at Cafe Vader Klaassens — a relaxed start to the evening with good music and good company.",
      nl: "Sil & de Schippers spelen een vroege liveset bij Cafe Vader Klaassens — een ontspannen start van de avond met goede muziek en gezelligheid.",
    },
    location: "Venlo",
    startTime: "17:00",
    tags: ["Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event13",
    slug: "the-undiagnosed",
    date: "2026-08-23",
    title: {
      en: "The Undiagnosed",
      nl: "The Undiagnosed",
    },
    blurb: {
      en: "Live music at Cafe Vader Klaassens on a Sunday evening. Grab a seat and enjoy the set.",
      nl: "Livemuziek bij Cafe Vader Klaassens op een zondagavond. Zoek een plekje en geniet van de set.",
    },
    description: {
      en: "The Undiagnosed bring their live set to Cafe Vader Klaassens for a Sunday evening of music.",
      nl: "The Undiagnosed brengen hun liveset naar Cafe Vader Klaassens voor een zondagavond vol muziek.",
    },
    location: "Venlo",
    startTime: "19:00",
    tags: ["Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event14",
    slug: "don-diego-trio",
    date: "2026-09-20",
    title: {
      en: "Don Diego Trio",
      nl: "Don Diego Trio",
    },
    blurb: {
      en: "The Don Diego Trio plays a live set at Cafe Vader Klaassens. A Sunday evening of music.",
      nl: "De Don Diego Trio speelt een liveset bij Cafe Vader Klaassens. Een zondagavond vol muziek.",
    },
    description: {
      en: "Don Diego Trio brings their sound to Cafe Vader Klaassens for a Sunday night live set.",
      nl: "Don Diego Trio brengt hun geluid naar Cafe Vader Klaassens voor een liveset op zondagavond.",
    },
    location: "Venlo",
    startTime: "20:00",
    tags: ["Live Music"],
    venue: "Cafe Vader Klaassens",
  },
  {
    id: "event15",
    slug: "het-tribunaal-emirhan",
    date: "2026-11-06",
    title: {
      en: "Het Tribunaal + Emirhan",
      nl: "Het Tribunaal + Emirhan",
    },
    blurb: {
      en: "Double bill at Cafe Vader Klaassens: Het Tribunaal and Emirhan share the stage on a Friday night.",
      nl: "Dubbele line-up bij Cafe Vader Klaassens: Het Tribunaal en Emirhan delen het podium op vrijdagavond.",
    },
    description: {
      en: "Het Tribunaal and Emirhan team up for a Friday night double bill at Cafe Vader Klaassens.",
      nl: "Het Tribunaal en Emirhan bundelen de krachten voor een dubbele line-up op vrijdagavond bij Cafe Vader Klaassens.",
    },
    location: "Venlo",
    startTime: "21:00",
    tags: ["Live Music"],
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
