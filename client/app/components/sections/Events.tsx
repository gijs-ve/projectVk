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
  >
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((event) => (
        <article
          key={event.title}
          className="flex h-full flex-col justify-between rounded-2xl border border-brand-border bg-brand-overlay/80 p-6 text-brand-text shadow-soft"
        >
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-textMuted">{event.date}</p>
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-sm text-brand-textMuted">{event.blurb}</p>
          </div>
          <div className="mt-6">
            <ArrowLink href="#contact" label={sectionCopy.ctaLabel} tone="ghost" />
          </div>
        </article>
      ))}
    </div>
  </SectionShell>
);

export default Events;
