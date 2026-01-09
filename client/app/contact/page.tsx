"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "../components/layout/Header";
import Contact from "../components/sections/Contact";
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
          <Contact contact={content.contact} sectionCopy={content.contactSection} />
        </main>
      </div>
    </div>
  );
}
