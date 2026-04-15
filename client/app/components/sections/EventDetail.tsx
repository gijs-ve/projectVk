"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../layout/Header";
import SectionShell from "../layout/SectionShell";
import ArrowLink from "../ui/ArrowLink";
import Divider from "../ui/Divider";
import GlowOrb from "../ui/GlowOrb";
import { getSiteContent } from "../../content/site";
import { formatEventDate } from "../../content/events";
import type { Event } from "../../content/events";
import type { Locale } from "../../types/content";

type Props = {
  event: Event;
};

const EventDetail = ({ event }: Props) => {
  const [locale, setLocale] = useState<Locale>("nl");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("nl")) setLocale("nl");
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const checkImage = async () => {
      try {
        const res = await fetch(`/events/${event.id}.jpg`, {
          method: "HEAD",
          signal: controller.signal,
        });
        setHasImage(res.ok);
      } catch (error) {
        if ((error as Error).name !== "AbortError") setHasImage(false);
      }
    };

    checkImage();

    return () => controller.abort();
  }, [event.id]);

  const content = useMemo(() => getSiteContent(locale), [locale]);
  const formattedDate = formatEventDate(event.date, locale);
  const imgSrc = `/events/${event.id}.jpg`;

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
          {/* Back link */}
          <Link
            href="/events"
            className="group inline-flex w-fit items-center gap-2 text-sm text-brand-textMuted transition-colors hover:text-brand-accent"
          >
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1" viewBox="0 0 24 24" aria-hidden>
              <path d="M19 12H5m0 0 6-6m-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {locale === "nl" ? "Terug naar agenda" : "Back to events"}
          </Link>

          {/* Hero image */}
          {hasImage && (
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-brand-border shadow-deep sm:rounded-3xl">
              <Image
                src={imgSrc}
                alt={event.title[locale] ?? event.title.en}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 via-transparent to-transparent" />
              <GlowOrb className="-bottom-20 left-1/4" color="rgba(224, 177, 90, 0.08)" size="300px" />
            </div>
          )}

          {/* Content card */}
          <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-gradient-to-b from-brand-surface/90 to-brand-surface/60 shadow-card sm:rounded-3xl">
            <GlowOrb className="-top-20 -right-20" color="rgba(107, 45, 62, 0.05)" size="300px" />

            <div className="relative space-y-6 p-6 sm:p-8 lg:p-10">
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-brand-textMuted">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-brand-ember/60" />
                  <span>{formattedDate}</span>
                </div>
                {event.startTime && (
                  <>
                    <span className="text-brand-border">·</span>
                    <span>{event.startTime}</span>
                  </>
                )}
                <span className="text-brand-border">·</span>
                <span>{event.location}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl font-semibold tracking-wide text-brand-text sm:text-4xl lg:text-5xl">
                {event.title[locale] ?? event.title.en}
              </h1>

              {/* Blurb */}
              <p className="max-w-3xl text-lg leading-relaxed text-brand-textMuted">
                {event.blurb[locale] ?? event.blurb.en}
              </p>

              <Divider />

              {/* Description */}
              <div className="max-w-3xl space-y-4">
                {(event.description[locale] ?? event.description.en)
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx} className="text-base leading-relaxed text-brand-textMuted/90 lg:text-lg">
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {event.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-brand-border/60 bg-brand-overlay/40 px-3.5 py-1.5 text-xs text-brand-textMuted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Divider />

              {/* Actions */}
              <div className="flex flex-wrap gap-3">
                <ArrowLink href="/contact" label={content.eventsSection.ctaLabel} />
                <ArrowLink href="/events" label={locale === "nl" ? "Alle evenementen" : "All events"} tone="ghost" />
              </div>
            </div>
          </div>
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
};

export default EventDetail;
