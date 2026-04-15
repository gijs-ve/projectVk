"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import Divider from "../components/ui/Divider";
import { getSiteContent } from "../content/site";
import type { Locale } from "../types/content";

const lyrics = `Carriere maken
Werken aan m'n toekomst
Ik ren door m'n agenda
Veilig in het ziekenfonds

En als de bom valt
Dan lig ik in m'n nette pak
Diploma's en m'n cheques op zak
Mijn polis en mijn woordenschat, a-oei!
Onder de flatgebouwen van de stad naast jou

Laat maar vallen dan
Het komt er toch wel van
Het geeft niet of je rent
'k Heb jou nooit gekend
Wil weten wie jij bent
Wil weten wie jij bent

Ik ben verzekerd van succes
Tegen brand en voor m'n leven
Ik heb van alles, maar geen tijd
Ook niet voor heel even
Ik moet aan m'n salaris denken
En aan mijn relaties
Maar liever weet ik wie jij bent
Voordat het te laat is

Want als de bom valt
Dan lig ik in m'n nette pak
Diploma's en m'n cheques op zak
Mijn polis en mijn woordenschat, a-oei!
Onder de flatgebouwen van de stad naast jou

Laat maar vallen dan
Het komt er toch wel van
Het geeft niet of je rent
'k Heb jou nooit gekend
Wil weten wie jij bent
Wil weten wie jij bent

Laat maar vallen dan
Het komt er toch wel van
Het geeft niet of je rent
'k Heb jou nooit gekend
Wil weten wie jij bent
Wil weten wie jij bent

Jij moet nog huiswerk maken
Een diploma halen
E is MC kwadraat
Mit, nach, nebst, nachst, samt, bei, seit
Von, zu, zuwider, entgegen, ausser, aus`;

export default function HuiswerkMakenPage() {
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
          <section className="flex flex-col gap-6">
            <h1 className="font-display text-3xl tracking-tight sm:text-4xl">
              Huiswerk Maken
            </h1>
            <pre className="whitespace-pre-wrap font-body text-base leading-relaxed text-brand-textMuted">
              {lyrics}
            </pre>
          </section>
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
