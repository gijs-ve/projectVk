import type { ReactNode } from "react";
import GlowOrb from "../ui/GlowOrb";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  title: string;
  eyebrow?: string;
  description?: string;
  glow?: boolean;
};

const SectionShell = ({ id, children, title, eyebrow, description, glow = false }: SectionShellProps) => (
  <section
    id={id}
    className="relative overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-b from-brand-surface/90 to-brand-surface/60 px-5 py-10 shadow-card backdrop-blur-sm sm:rounded-3xl sm:px-8 sm:py-12 lg:px-12 lg:py-14"
  >
    {glow && (
      <GlowOrb
        className="-top-20 -right-20 animate-pulse-warm"
        color="rgba(224, 177, 90, 0.06)"
        size="300px"
      />
    )}

    <div className="relative flex flex-col gap-2">
      {eyebrow && (
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-brand-accent to-transparent" />
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-brand-accent/80">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className="font-display text-2xl font-semibold tracking-wide text-brand-text sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-1 max-w-2xl text-base leading-relaxed text-brand-textMuted lg:text-lg">
          {description}
        </p>
      )}
    </div>

    <div className="relative mt-8 sm:mt-10">{children}</div>
  </section>
);

export default SectionShell;
