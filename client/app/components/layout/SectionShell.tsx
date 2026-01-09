import type { ReactNode } from "react";

type SectionShellProps = {
  id: string;
  children: ReactNode;
  title: string;
  eyebrow?: string;
  description?: string;
};

const SectionShell = ({ id, children, title, eyebrow, description }: SectionShellProps) => (
  <section
    id={id}
    className="rounded-3xl border border-brand-border bg-brand-surface/80 px-5 py-8 shadow-medium sm:px-8 sm:py-10 lg:px-10"
  >
    <div className="flex flex-col gap-3">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-brand-textMuted">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-semibold text-brand-text sm:text-3xl">{title}</h2>
      {description && <p className="max-w-3xl text-base text-brand-textMuted">{description}</p>}
    </div>
    <div className="mt-6 sm:mt-8">{children}</div>
  </section>
);

export default SectionShell;
