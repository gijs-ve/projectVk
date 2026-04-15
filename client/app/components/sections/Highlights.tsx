import type { Highlight, SectionCopy } from "@/app/types/content";
import SectionShell from "../layout/SectionShell";

type HighlightsProps = {
  sectionCopy: SectionCopy;
  items: Highlight[];
};

const accentColors = [
  { dot: "bg-brand-accent", glow: "from-brand-accent/5" },
  { dot: "bg-brand-ember", glow: "from-brand-ember/5" },
  { dot: "bg-brand-wine", glow: "from-brand-wine/5" },
];

const Highlights = ({ sectionCopy, items }: HighlightsProps) => (
  <SectionShell
    id="highlights"
    title={sectionCopy.title}
    eyebrow={sectionCopy.eyebrow}
    description={sectionCopy.description}
  >
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, idx) => {
        const accent = accentColors[idx % accentColors.length];

        return (
          <div
            key={item.title}
            className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-xl border border-brand-border bg-gradient-to-b from-brand-overlay/80 to-brand-overlay/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-borderLight hover:shadow-card"
          >
            {/* Corner glow on hover */}
            <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${accent.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

            <div className="relative">
              <div className={`mb-3 h-2 w-2 rounded-full ${accent.dot}`} />
              <h3 className="font-display text-lg font-semibold tracking-wide text-brand-text">
                {item.title}
              </h3>
            </div>
            <p className="relative text-sm leading-relaxed text-brand-textMuted">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  </SectionShell>
);

export default Highlights;
