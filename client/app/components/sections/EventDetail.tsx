"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../layout/Header";
import SectionShell from "../layout/SectionShell";
import ArrowLink from "../ui/ArrowLink";
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
        // Ignore aborts; treat other errors as missing image
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
            title={event.title[locale] ?? event.title.en}
            eyebrow={content.eventsSection.eyebrow}
          >
            <article className="space-y-6">
              {hasImage && (
                <div className="mx-auto relative aspect-video w-full max-w-6xl overflow-hidden rounded-2xl border border-brand-border">
                  <Image
                    src={imgSrc}
                    alt={event.title[locale] ?? event.title.en}
                    fill
                    className="object-cover w-6xl"
                    priority
                  />
                </div>
              )}

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
                    {event.title[locale] ?? event.title.en}
                  </h1>

                  <p className="text-lg leading-relaxed text-brand-textMuted">
                    {event.blurb[locale] ?? event.blurb.en}
                  </p>

                  <div className="prose prose-invert max-w-none pt-4">
                    {(event.description[locale] ?? event.description.en)
                      .split("\n\n")
                      .map((paragraph, idx) => (
                        <p key={idx} className="text-lg">
                          {paragraph}
                        </p>
                      ))}
                  </div>

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
};

export default EventDetail;
