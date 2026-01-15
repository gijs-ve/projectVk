export type Locale = "en" | "nl";

export type NavItem = {
  label: string;
  href: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type EventItem = {
  id: string;
  slug: string;
  date: string; // ISO date used for routing
  displayDate: string; // Human-friendly date for UI
  title: string;
  blurb: string;
  location: string;
  startTime?: string;
  tags?: string[];
  venue?: string;
};

export type ContactHour = {
  label: string;
  value: string;
};

export type ContactInfo = {
  heading: string;
  address: string;
  phone: string;
  email: string;
  hours: ContactHour[];
};

export type CTA = { label: string; href: string };

export type HeroContent = {
  eyebrow: string;
  heading: string;
  subheading: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  badges: string[];
  tonight: { label: string; value: string; pill: string; href?: string };
};

export type SectionCopy = {
  title: string;
  eyebrow: string;
  description?: string;
};

export type EventsSectionCopy = SectionCopy & {
  ctaLabel: string;
};

export type ContactSectionCopy = SectionCopy & {
  note: string;
  hoursTitle: string;
  linkLabels: { upcoming: string; backToTop: string };
};

export type SiteCopy = {
  pubName: string;
  strapline: string;
  location: string;
  footerNote: string;
};

export type SiteContent = {
  site: SiteCopy;
  navItems: NavItem[];
  hero: HeroContent;
  highlightsSection: SectionCopy;
  highlights: Highlight[];
  eventsSection: EventsSectionCopy;
  featuredEventIds?: string[];
  events: EventItem[];
  contactSection: ContactSectionCopy;
  contact: ContactInfo;
};
