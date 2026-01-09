"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import SectionShell from "../components/layout/SectionShell";
import ArrowLink from "../components/ui/ArrowLink";
import { getSiteContent } from "../content/site";
import type { Locale } from "../types/content";

export default function EventsPage() {
  const [locale, setLocale] = useState<Locale>("nl");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("nl")) setLocale("nl");
  }, []);

  const content = useMemo(() => getSiteContent(locale), [locale]);
  const event = content.events[0];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      <div className="mx-auto flex max-w-content flex-col gap-10 px-4 pb-12 pt-6 sm:px-6 lg:px-10 lg:pb-16 lg:pt-8">
        <Header
          navItems={content.navItems}
          pubName={content.site.pubName}
          strapline={content.site.strapline}
          locale={locale}
          onLocaleChange={setLocale}
          isMenuOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((prev) => !prev)}
        />

        <main className="flex flex-col gap-10 lg:gap-12">
          <SectionShell
            id="events"
            title={content.eventsSection.title}
            eyebrow={content.eventsSection.eyebrow}
            description={content.eventsSection.description}
          >
            <article className="rounded-2xl border border-brand-border bg-brand-overlay/80 p-6 text-brand-text shadow-soft">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.2em] text-brand-textMuted">{event.date}</p>
                <h1 className="text-2xl font-semibold sm:text-3xl">{event.title}</h1>
                <p className="text-sm text-brand-textMuted">{event.blurb}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-brand-textMuted">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/5 px-3 py-2">
                  Limburg Film Festival · Venlo
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/5 px-3 py-2">
                  Cafe Vader Klaassens
                </span>
              </div>
              <div className="mt-6 flex gap-3">
                <ArrowLink href="/contact" label={content.contactSection.linkLabels.upcoming} />
                <Link
                  href="/"
                  className="rounded-full px-4 py-2 text-brand-textMuted transition-colors hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
                >
                  {content.contactSection.linkLabels.backToTop}
                </Link>
              </div>
            </article>
          </SectionShell>
        </main>
      </div>
    </div>
  );
}
