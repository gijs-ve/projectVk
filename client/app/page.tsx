"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Events from "./components/sections/Events";
import Hero from "./components/sections/Hero";
import Highlights from "./components/sections/Highlights";
import Header from "./components/layout/Header";
import Divider from "./components/ui/Divider";
import WarmWave from "./components/ui/WarmWave";
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
          <Hero content={content.hero} />

          <Divider />

          <Highlights sectionCopy={content.highlightsSection} items={content.highlights} />

          <Divider />

          <Events sectionCopy={content.eventsSection} items={content.events} />
        </main>

        <Divider className="mt-4" />

        {/* Footer */}
        <footer className="relative">
          <div className="flex flex-col items-center gap-6 py-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="space-y-1">
              <p className="font-display text-sm tracking-wide text-brand-textMuted">
                {content.site.footerNote}
              </p>
              <p className="text-xs text-brand-textMuted/50">
                {content.site.strapline}
              </p>
            </div>
            <nav className="flex gap-1">
              <Link
                href={contactNav.href}
                className="rounded-full px-4 py-2 text-sm text-brand-textMuted transition-colors duration-200 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
              >
                {contactNav.label}
              </Link>
              <Link
                href={eventsNav.href}
                className="rounded-full px-4 py-2 text-sm text-brand-textMuted transition-colors duration-200 hover:text-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
              >
                {eventsNav.label}
              </Link>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  );
}
