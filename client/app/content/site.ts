import type { Locale, SiteContent } from "../types/content";

const translations: Record<Locale, SiteContent> = {
  en: {
    site: {
      pubName: "Cafe Vader Klaassens",
      strapline: "Venlo cafe with a warm welcome",
      location: "Venlo",
      footerNote: "Cafe Vader Klaassens · Venlo",
    },
    navItems: [
      { label: "Home", href: "/" },
      { label: "Events", href: "/events" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      eyebrow: "Venlo • Cafe Vader Klaassens",
      heading: "A warm welcome in the living room of Venlo.",
      subheading:
        "Drop by for a pint of Brand, rotating Dutch and Belgian beers, and the easy chatter of regulars.",
      primaryCta: { label: "Get in touch", href: "/contact" },
      secondaryCta: { label: "See events", href: "/#events" },
      badges: [
        "Brand on tap",
        "Seasonal guest brews",
        "Live music nights",
      ],
      tonight: {
        label: "Tonight at the pub",
        value: "21:30 Dame Du Ton · later Octopus",
        pill: "Event page",
      },
    },
    highlightsSection: {
      title: "Why locals stay",
      eyebrow: "Beer • Company • Music",
      description:
        "A snug corner pub in Venlo with honest pours, soft light, and staff who remember your favorite beer.",
    },
    highlights: [
      {
        title: "Brand and friends",
        description: "Brand on tap plus rotating Dutch and Belgian specials for the curious drinker.",
      },
      {
        title: "Quiet corners",
        description: "Small tables, window seats, and a long bar where you can sit, talk, and linger.",
      },
      {
        title: "Live evenings",
        description: "Acoustic sets, pub quizzes, and easy-going sessions that fit the room—not the other way around.",
      },
    ],
    eventsSection: {
      title: "Events",
      eyebrow: "What is on",
      description: "Curated nights at Vader Klaassens and friends.",
      ctaLabel: "More info",
    },
    events: [
      {
        title: "Curated by FLUJAS",
        date: "Thu 15 Jan · Venlo",
        blurb:
          "With De Nieuwe Scene and Cafe Vader Klaassens for Limburg Film Festival. 21:30 Dame Du Ton (ambient art rock), later Octopus (psychedelic garage). Free entry at Vader Klaassens; first drink on FLUJAS at Creatives Café.",
      },
    ],
    contactSection: {
      title: "Come by or reach out",
      eyebrow: "Visit • Call • Mail",
      description: "Let us know you are on your way, or simply walk in.",
      hoursTitle: "Opening hours",
      linkLabels: { upcoming: "Upcoming nights", backToTop: "Back to top" },
      note: "Walk-ins are fine. For groups of six or more, call ahead so we can save a corner.",
    },
    contact: {
      heading: "Ready when you are",
      address: "Parade 42, 5911 CD Venlo",
      phone: "+31 (0)77 555 0101",
      email: "hallo@cafevaderklaassens.nl",
      hours: [
        { label: "Wed-Thu", value: "16:00 – 01:00" },
        { label: "Fri-Sat", value: "15:00 – 02:00" },
        { label: "Sunday", value: "16:00 – 01:00" },
      ],
    },
  },
  nl: {
    site: {
      pubName: "Cafe Vader Klaassens",
      strapline: "Venlo • Iedereen welkom",
      location: "Venlo",
      footerNote: "Cafe Vader Klaassens · Venlo",
    },
    navItems: [
      { label: "Home", href: "/" },
      { label: "Agenda", href: "/events" },
      { label: "Contact", href: "/contact" },
    ],
    hero: {
      eyebrow: "Venlo • Cafe Vader Klaassens",
      heading: "Welkom in de huiskamer van Venlo.",
      subheading:
        "Kom binnen voor een glas Brand, wisselende bieren en de gemoedelijke praat van vaste gasten.",
      primaryCta: { label: "Neem contact op", href: "/contact" },
      secondaryCta: { label: "Bekijk de agenda", href: "/#events" },
      badges: [
        "Brand van de tap",
        "Gastbieren uit NL en BE",
        "Live muziek avonden",
      ],
      tonight: {
        label: "Vanavond in het café",
        value: "21:30 Dame Du Ton · later Octopus",
        pill: "Bekijk event",
      },
    },
    highlightsSection: {
      title: "Waarom je blijft hangen",
      eyebrow: "Bier • Gezelligheid • Muziek",
      description:
        "Een knusse kroeg in Venlo met eerlijke schenkingen, zachte verlichting en mensen die je naam onthouden.",
    },
    highlights: [
      {
        title: "Brand en meer",
        description: "Brand op tap en wisselende speciaalbieren voor wie iets nieuws wil proeven.",
      },
      {
        title: "Hoeken om te blijven",
        description: "Kleine tafels, barkrukken en vensterbanken waar je rustig kunt zitten en praten.",
      },
      {
        title: "Avonden met muziek",
        description: "Akoestiek, quiz of een sessie; precies wat bij de sfeer past, niet andersom.",
      },
    ],
    eventsSection: {
      title: "Agenda",
      eyebrow: "Wat is er",
      description: "Avonden bij Vader Klaassens en vrienden.",
      ctaLabel: "Meer weten?",
    },
    events: [
      {
        title: "Gecureerd door FLUJAS",
        date: "Do 15 jan · Venlo",
        blurb:
          "Samen met De Nieuwe Scene en Cafe Vader Klaassens voor Limburg Film Festival. 21:30 Dame Du Ton (ambient artrock), daarna Octopus (psychedelische garagerock). Gratis bij Vader Klaassens; eerste drankje van FLUJAS tijdens Creatives Café.",
      },
    ],
    contactSection: {
      title: "Loop binnen of laat iets weten",
      eyebrow: "Bezoek • Bel • Mail",
      description: "Geef een seintje dat je komt, of stap gewoon binnen.",
      hoursTitle: "Openingstijden",
      linkLabels: { upcoming: "Agenda", backToTop: "Naar boven" },
      note: "Binnenlopen mag altijd. Voor groepen van zes of meer graag even bellen, dan houden we een hoekje vrij.",
    },
    contact: {
      heading: "We staan klaar",
      address: "Parade 42, 5911 CD Venlo",
      phone: "+31 (0)77 555 0101",
      email: "hallo@cafevaderklaassens.nl",
      hours: [
        { label: "Wo-Do", value: "16:00 – 01:00" },
        { label: "Vr-Za", value: "15:00 – 02:00" },
        { label: "Zondag", value: "16:00 – 01:00" },
      ],
    },
  },
};

export const getSiteContent = (locale: Locale = "nl") => translations[locale] ?? translations.nl;
