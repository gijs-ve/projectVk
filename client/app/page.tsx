"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Events from "./components/sections/Events";
import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";
import Header from "./components/layout/Header";
import { getSiteContent } from "./content/site";
import type { Locale } from "./types/content";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locale, setLocale] = useState<Locale>("nl");

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("nl")) setLocale("nl");
  }, []);

  const content = useMemo(() => getSiteContent(locale), [locale]);
  const contactNav = content.navItems.find((item) => item.href.includes("contact")) ?? content.navItems[0];
  const eventsNav = content.navItems.find((item) => item.href.includes("events")) ?? content.navItems[0];

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
          <Hero content={content.hero} />
          {/* <Highlights sectionCopy={content.highlightsSection} items={content.highlights} /> */}
          <Events sectionCopy={content.eventsSection} items={content.events} />
        </main>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-border pt-6 text-sm text-brand-textMuted">
          <span>
            {content.site.footerNote}
          </span>
          <div className="flex gap-3">
            <Link
              href={contactNav.href}
              className="rounded-full px-3 py-2 transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
            >
              {contactNav.label}
            </Link>
            <Link
              href={eventsNav.href}
              className="rounded-full px-3 py-2 transition-colors hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
            >
              {eventsNav.label}
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
