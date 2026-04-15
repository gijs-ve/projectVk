import Link from "next/link";
import type { ContactInfo, ContactSectionCopy } from "@/app/types/content";
import SectionShell from "../layout/SectionShell";
import ArrowLink from "../ui/ArrowLink";
import GlowOrb from "../ui/GlowOrb";

type ContactProps = {
  contact: ContactInfo;
  sectionCopy: ContactSectionCopy;
};

const Contact = ({ contact, sectionCopy }: ContactProps) => (
  <SectionShell
    id="contact"
    title={contact.heading}
    eyebrow={sectionCopy.eyebrow}
    description={sectionCopy.description}
    glow
  >
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
      {/* Contact details */}
      <div className="space-y-6 text-brand-text">
        <div className="space-y-5">
          <div className="group flex flex-col gap-1.5 rounded-xl border border-brand-border/50 bg-brand-overlay/40 p-4 transition-colors hover:border-brand-borderLight">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-textMuted/70">
              {sectionCopy.eyebrow.split("·")[0]?.trim() ?? "Address"}
            </p>
            <p className="text-lg font-medium text-brand-text">{contact.address}</p>
          </div>

          <div className="group flex flex-col gap-1.5 rounded-xl border border-brand-border/50 bg-brand-overlay/40 p-4 transition-colors hover:border-brand-borderLight">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-textMuted/70">
              {sectionCopy.eyebrow.split("·")[1]?.trim() ?? "Phone"}
            </p>
            <Link
              href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
              className="text-lg font-medium text-brand-accent underline-offset-4 transition-colors hover:text-brand-glow hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
            >
              {contact.phone}
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-1">
          <ArrowLink href="/events" label={sectionCopy.linkLabels.upcoming} tone="ghost" />
          <ArrowLink href="/" label={sectionCopy.linkLabels.backToTop} tone="ghost" />
        </div>
      </div>

      {/* Opening hours card */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-b from-brand-overlay/90 to-brand-overlay/50 p-6 shadow-card lg:p-8">
        <GlowOrb
          className="-top-16 -right-16"
          color="rgba(196, 80, 26, 0.04)"
          size="200px"
        />

        <h3 className="relative font-display text-lg font-semibold tracking-wide text-brand-text">
          {sectionCopy.hoursTitle}
        </h3>

        <ul className="relative mt-5 space-y-1">
          {contact.hours.map((slot) => (
            <li
              key={slot.label}
              className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/[0.03]"
            >
              <span className="text-brand-textMuted transition-colors group-hover:text-brand-text">
                {slot.label}
              </span>
              <span className="font-medium text-brand-text">{slot.value}</span>
            </li>
          ))}
        </ul>

        <div className="relative mt-5 rounded-xl border border-brand-border/60 bg-brand-surface/40 px-4 py-3 text-sm leading-relaxed text-brand-textMuted">
          {sectionCopy.note}
        </div>
      </div>
    </div>
  </SectionShell>
);

export default Contact;
