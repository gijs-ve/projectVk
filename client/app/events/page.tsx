"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import SectionShell from "../components/layout/SectionShell";
import Divider from "../components/ui/Divider";
import { getSiteContent } from "../content/site";
import { getUpcomingEventsLocalized } from "../content/events";
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
  const events = getUpcomingEventsLocalized(locale);

  return (
    <div className="grain-overlay min-h-screen bg-brand-bg text-brand-text">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:gap-10 lg:px-8 lg:pb-20 lg:pt-8">
        <Header
          navItems={content.navItems}
          pubName={content.site.pubName}
          strapline={content.site.strapline}
          locale={locale}
          onLocaleChange={setLocale}
          isMenuOpen={isMenuOpen}
          onToggle={() => setIsMenuOpen((prev) => !prev)}
        />

        <main className="flex flex-col gap-8 lg:gap-10">
          <SectionShell
            id="events"
            title={content.eventsSection.title}
            eyebrow={content.eventsSection.eyebrow}
            description={content.eventsSection.description}
            glow
          >
            <div className="space-y-4">
              {events.length === 0 && (
                <div className="rounded-xl border border-brand-border/50 bg-brand-overlay/30 px-6 py-12 text-center">
                  <p className="text-brand-textMuted">
                    {locale === "nl"
                      ? "Momenteel geen aankomende evenementen."
                      : "No upcoming events at the moment."}
                  </p>
                </div>
              )}
              {events.map((event) => {
                const eventUrl = `/events/${event.slug}/${event.date}`;
                return (
                  <Link
                    href={eventUrl}
                    key={`${event.slug}-${event.date}`}
                    className="group relative block overflow-hidden rounded-xl border border-brand-border bg-gradient-to-r from-brand-overlay/80 to-brand-overlay/50 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-borderLight hover:shadow-glow"
                  >
                    {/* Top accent line */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/0 to-transparent transition-all duration-500 group-hover:via-brand-accent/20" />

                    <div className="relative p-6 sm:p-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="space-y-3 sm:flex-1">
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-brand-ember/60" />
                            <p className="text-xs uppercase tracking-[0.2em] text-brand-textMuted">
                              {event.displayDate} · {event.location}
                            </p>
                          </div>
                          <h2 className="font-display text-2xl font-semibold tracking-wide transition-colors duration-300 group-hover:text-brand-accent sm:text-3xl">
                            {event.title}
                          </h2>
                          <p className="max-w-2xl text-sm leading-relaxed text-brand-textMuted">
                            {event.blurb}
                          </p>
                        </div>

                        {/* Arrow indicator */}
                        <div className="hidden shrink-0 sm:flex sm:items-center sm:self-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-border text-brand-textMuted transition-all duration-300 group-hover:border-brand-accent/40 group-hover:text-brand-accent">
                            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" aria-hidden>
                              <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {event.tags && event.tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {event.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="rounded-full border border-brand-border/60 bg-brand-surface/40 px-3 py-1.5 text-xs text-brand-textMuted transition-colors group-hover:border-brand-borderLight"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </SectionShell>
        </main>

        <Divider className="mt-4" />

        <footer className="flex flex-col items-center gap-6 py-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="font-display text-sm tracking-wide text-brand-textMuted">
            {content.site.footerNote}
          </p>
          <nav className="flex gap-1">
            <Link href="/" className="rounded-full px-4 py-2 text-sm text-brand-textMuted transition-colors hover:text-brand-accent">
              Home
            </Link>
            <Link href="/contact" className="rounded-full px-4 py-2 text-sm text-brand-textMuted transition-colors hover:text-brand-accent">
              Contact
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
