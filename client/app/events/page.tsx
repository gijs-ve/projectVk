"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/layout/Header";
import SectionShell from "../components/layout/SectionShell";
import ArrowLink from "../components/ui/ArrowLink";
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
            <div className="space-y-6">
              {events.length === 0 && (
                <p className="text-center text-brand-textMuted">
                  {locale === "nl"
                    ? "Momenteel geen aankomende evenementen."
                    : "No upcoming events at the moment."}
                </p>
              )}
              {events.map((event) => {
                const eventUrl = `/events/${event.slug}/${event.date}`;
                return (
                  <Link
                    href={eventUrl}
                    key={`${event.slug}-${event.date}`}
                    className="overflow-hidden block rounded-2xl border border-brand-border bg-brand-overlay/80 text-brand-text shadow-soft"
                  >
                   
                    <div className="p-6">
                      <div className="space-y-3">
                        <p className="text-xs uppercase tracking-[0.2em] text-brand-textMuted">
                          {event.displayDate} · {event.location}
                        </p>
                        <Link href={eventUrl}>
                          <h2 className="text-2xl font-semibold transition-colors hover:text-brand-accent sm:text-3xl">
                            {event.title}
                          </h2>
                        </Link>
                        <p className="text-sm text-brand-textMuted">{event.blurb}</p>
                      </div>
                      {event.tags && event.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-3 text-sm text-brand-textMuted">
                          {event.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/5 px-3 py-2"
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
      </div>
    </div>
  );
}
