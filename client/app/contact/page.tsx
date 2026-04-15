"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import Contact from "../components/sections/Contact";
import Divider from "../components/ui/Divider";
import { getSiteContent } from "../content/site";
import type { Locale } from "../types/content";

export default function ContactPage() {
  const [locale, setLocale] = useState<Locale>("nl");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (typeof navigator === "undefined") return;
    const lang = navigator.language.toLowerCase();
    if (lang.startsWith("nl")) setLocale("nl");
  }, []);

  const content = useMemo(() => getSiteContent(locale), [locale]);

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
          <Contact contact={content.contact} sectionCopy={content.contactSection} />
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
            <Link href="/events" className="rounded-full px-4 py-2 text-sm text-brand-textMuted transition-colors hover:text-brand-accent">
              {content.navItems.find((item) => item.href.includes("events"))?.label ?? "Events"}
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
