import type { Highlight, SectionCopy } from "@/app/types/content";
import SectionShell from "../layout/SectionShell";

type HighlightsProps = {
  sectionCopy: SectionCopy;
  items: Highlight[];
};

const Highlights = ({ sectionCopy, items }: HighlightsProps) => (
  <SectionShell
    id="highlights"
    title={sectionCopy.title}
    eyebrow={sectionCopy.eyebrow}
    description={sectionCopy.description}
  >
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="relative flex h-full flex-col gap-3 rounded-2xl border border-brand-border bg-brand-overlay/70 px-5 py-6 text-brand-text shadow-soft"
        >
          <div
            className="absolute right-4 top-4 h-10 w-10 rounded-full bg-brand-accent/15"
            aria-hidden
          />
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-sm text-brand-textMuted">{item.description}</p>
        </div>
      ))}
    </div>
  </SectionShell>
);

export default Highlights;
