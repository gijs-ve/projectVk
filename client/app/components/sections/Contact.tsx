import Link from "next/link";
import type { ContactInfo, ContactSectionCopy } from "@/app/types/content";
import SectionShell from "../layout/SectionShell";
import ArrowLink from "../ui/ArrowLink";

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
  >
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-4 text-brand-text">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-brand-textMuted">Address</p>
          <p className="text-lg font-medium">{contact.address}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-brand-textMuted">Phone</p>
          <Link
            href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}
            className="text-lg font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            {contact.phone}
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-brand-textMuted">Email</p>
          <Link
            href={`mailto:${contact.email}`}
            className="text-lg font-medium underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            {contact.email}
          </Link>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <ArrowLink href="#events" label={sectionCopy.linkLabels.upcoming} tone="ghost" />
          <ArrowLink href="#home" label={sectionCopy.linkLabels.backToTop} tone="ghost" />
        </div>
      </div>

      <div className="space-y-4 rounded-2xl border border-brand-border bg-brand-overlay/80 p-6 text-brand-text shadow-soft">
        <h3 className="text-lg font-semibold">{sectionCopy.hoursTitle}</h3>
        <ul className="space-y-2 text-sm text-brand-textMuted">
          {contact.hours.map((slot) => (
            <li
              key={slot.label}
              className="flex items-center justify-between rounded-xl px-3 py-2 hover:bg-white/5"
            >
              <span>{slot.label}</span>
              <span className="text-brand-text">{slot.value}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 rounded-xl border border-brand-border bg-brand-surface/60 px-4 py-3 text-sm text-brand-textMuted">
          {sectionCopy.note}
        </div>
      </div>
    </div>
  </SectionShell>
);

export default Contact;
