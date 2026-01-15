"use client";

import { useEffect, useMemo, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "../../../components/layout/Header";
import SectionShell from "../../../components/layout/SectionShell";
import ArrowLink from "../../../components/ui/ArrowLink";
import { getSiteContent } from "../../../content/site";
import { getEventBySlugAndDate, formatEventDate } from "../../../content/events";
import type { Locale } from "../../../types/content";

type PageProps = {
  params: Promise<{
    slug: string;
    date: string;
  }>;
};

export default function EventDetailPage({ params }: PageProps) {
  const [locale, setLocale] = useState<Locale>("nl");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<{
    slug: string;
    date: string;
  } | null>(null);

  useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("nl")) setLocale("nl");
  }, []);

  const content = useMemo(() => getSiteContent(locale), [locale]);

  if (!resolvedParams) {
    return null;
  }

  const event = getEventBySlugAndDate(resolvedParams.slug, resolvedParams.date);

  if (!event) {
    notFound();
  }

  const formattedDate = formatEventDate(event.date, locale);

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
            id="event-detail"
            title={event.title[locale]}
            eyebrow={content.eventsSection.eyebrow}
          >
            <article className="space-y-6">
              {/* Event Image */}
              <div className="mx-auto relative aspect-video w-full  max-w-6xl overflow-hidden rounded-2xl border border-brand-border">
                <Image
                  src={`/events/${event.id}.jpg`}
                  alt={event.title[locale]}
                  fill
                  className="object-cover w-6xl"
                  priority
                />
              </div>

              {/* Event Details Card */}
              <div className="rounded-2xl border border-brand-border bg-brand-overlay/80 p-6 text-brand-text shadow-soft">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-brand-textMuted">
                    <span>{formattedDate}</span>
                    {event.startTime && (
                      <>
                        <span>·</span>
                        <span>{event.startTime}</span>
                      </>
                    )}
                    <span>·</span>
                    <span>{event.location}</span>
                  </div>

                  <h1 className="text-3xl font-semibold sm:text-4xl">
                    {event.title[locale]}
                  </h1>

                  <p className="text-lg leading-relaxed text-brand-textMuted">
                    {event.blurb[locale]}
                  </p>

                  {/* Description */}
                  <div className="prose prose-invert max-w-none pt-4">
                    {event.description[locale].split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  {event.tags && event.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3 pt-4 text-sm text-brand-textMuted">
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

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <ArrowLink href="/contact" label={content.eventsSection.ctaLabel} />
                    <Link
                      href="/events"
                      className="rounded-full px-4 py-2 text-brand-textMuted transition-colors hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
                    >
                      {locale === "nl" ? "Terug naar agenda" : "Back to events"}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </SectionShell>
        </main>
      </div>
    </div>
  );
}
