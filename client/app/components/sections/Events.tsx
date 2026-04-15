import Link from "next/link";
import type { EventItem, EventsSectionCopy } from "@/app/types/content";
import SectionShell from "../layout/SectionShell";
import ArrowLink from "../ui/ArrowLink";

type EventsProps = {
  sectionCopy: EventsSectionCopy;
  items: EventItem[];
};

const Events = ({ sectionCopy, items }: EventsProps) => (
  <SectionShell
    id="events"
    title={sectionCopy.title}
    eyebrow={sectionCopy.eyebrow}
    description={sectionCopy.description}
    glow
  >
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((event) => {
        const eventUrl = `/events/${event.slug}/${event.date}`;

        return (
          <Link
            href={eventUrl}
            key={`${event.id}-${event.slug}`}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-brand-border bg-gradient-to-b from-brand-overlay/90 to-brand-overlay/50 p-6 text-brand-text shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-borderLight hover:shadow-glow"
          >
            {/* Hover glow accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 via-brand-accent/0 to-brand-accent/0 transition-all duration-500 group-hover:from-brand-accent/[0.03] group-hover:via-transparent group-hover:to-brand-wine/[0.03]" />

            {/* Top accent line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent transition-all duration-500 group-hover:via-brand-accent/30" />

            <div className="relative space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-brand-ember/60" />
                <p className="text-xs uppercase tracking-[0.2em] text-brand-textMuted">
                  {event.displayDate} · {event.location}
                </p>
              </div>
              <h3 className="font-display text-xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-brand-accent">
                {event.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-textMuted">
                {event.blurb}
              </p>
            </div>

            <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-brand-accent/80 transition-colors duration-300 group-hover:text-brand-accent">
              <span>{sectionCopy.ctaLabel}</span>
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  d="M5 12h14m0 0-6-6m6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        );
      })}
    </div>
  </SectionShell>
);

export default Events;
