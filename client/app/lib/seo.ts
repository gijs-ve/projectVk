import type { Event } from "../content/events";
import type { Locale } from "../types/content";

const DEFAULT_SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vaderklaassens.nl";

export const siteUrl = DEFAULT_SITE_URL.replace(/\/$/, "");

export const absoluteUrl = (path: string = "/"): string => {
  try {
    return new URL(path, siteUrl).toString();
  } catch {
    return siteUrl;
  }
};

export const siteName = "Cafe Vader Klaassens";
export const siteTagline = "Café aan de Parade in Venlo";
export const siteDescription =
  "Cafe Vader Klaassens — café aan de Parade in Venlo met Brand op tap, wisselende speciaalbieren en live muziek. Loop binnen voor een warme huiskamer-sfeer.";
export const siteKeywords = [
  "café Venlo",
  "kroeg Venlo",
  "Cafe Vader Klaassens",
  "live muziek Venlo",
  "Brand bier",
  "speciaalbier Venlo",
  "Parade Venlo",
  "bruin café Venlo",
];

export const defaultOgImage = absoluteUrl("/events/event1.jpg");
export const eventOgImage = (eventId: string) => absoluteUrl(`/events/${eventId}.jpg`);

// Mirrors the address/phone/hours in app/content/site.ts. Kept here in
// structured form because schema.org needs separated fields and time ranges.
export const business = {
  name: siteName,
  streetAddress: "Parade 67",
  postalCode: "5911 CB",
  addressLocality: "Venlo",
  addressCountry: "NL",
  telephone: "+31683898690",
  email: "hallo@cafevaderklaassens.nl",
  // Closing times that cross midnight are expressed as next-day per schema.org.
  hours: [
    { days: ["Wednesday", "Thursday"], opens: "16:00", closes: "01:00" },
    { days: ["Friday", "Saturday"], opens: "15:00", closes: "02:00" },
    { days: ["Sunday"], opens: "16:00", closes: "01:00" },
  ],
} as const;

export const barOrPubJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: business.name,
  url: siteUrl,
  image: defaultOgImage,
  telephone: business.telephone,
  email: business.email,
  servesCuisine: "Bar",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    postalCode: business.postalCode,
    addressLocality: business.addressLocality,
    addressCountry: business.addressCountry,
  },
  openingHoursSpecification: business.hours.map((slot) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: slot.days,
    opens: slot.opens,
    closes: slot.closes,
  })),
});

export const eventJsonLd = (event: Event, locale: Locale = "nl") => {
  const title = event.title[locale] ?? event.title.en;
  const description = event.description[locale] ?? event.description.en;
  const startTime = event.startTime ?? "20:00";
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: title,
    description,
    startDate: `${event.date}T${startTime}:00+01:00`,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    image: eventOgImage(event.id),
    url: absoluteUrl(`/events/${event.slug}/${event.date}`),
    location: {
      "@type": "Place",
      name: event.venue ?? business.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: business.streetAddress,
        postalCode: business.postalCode,
        addressLocality: event.location || business.addressLocality,
        addressCountry: business.addressCountry,
      },
    },
    organizer: {
      "@type": "Organization",
      name: business.name,
      url: siteUrl,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/events/${event.slug}/${event.date}`),
    },
  };
};
