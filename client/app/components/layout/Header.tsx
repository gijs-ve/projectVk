"use client";

import Link from "next/link";
import type { Locale, NavItem } from "@/app/types/content";

export type HeaderProps = {
  navItems: NavItem[];
  pubName: string;
  strapline: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  isMenuOpen: boolean;
  onToggle: () => void;
};

const resolveHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

const Header = ({ navItems, pubName, strapline, locale, onLocaleChange, isMenuOpen, onToggle }: HeaderProps) => (
  <header className="sticky top-[max(env(safe-area-inset-top),0.75rem)] z-30 md:top-3">
    <div className="mx-auto flex max-w-[1200px] items-center justify-between rounded-2xl border border-brand-border bg-brand-surface/80 px-4 py-3 text-brand-text shadow-card backdrop-blur-xl sm:px-6 lg:px-8">
      <Link href="/" className="group flex items-center gap-3" aria-label="Go to home">
        <div className="leading-tight">
          <p className="text-xs text-brand-textMuted/70 transition-colors group-hover:text-brand-textMuted">
            {strapline}
          </p>
          <p className="font-display text-base font-semibold tracking-[0.04em] transition-colors group-hover:text-brand-accent sm:text-lg">
            {pubName}
          </p>
        </div>
      </Link>

      <nav className="hidden items-center gap-0.5 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={resolveHref(item.href)}
            className="rounded-lg px-3.5 py-2 font-display text-sm tracking-[0.03em] text-brand-textMuted transition-all duration-200 hover:bg-white/[0.04] hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-1.5 md:flex" aria-label="Language">
        {(["nl", "en"] as const).map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => onLocaleChange(code)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
              locale === code
                ? "border-brand-accent/60 bg-brand-accent/10 text-brand-accent"
                : "border-brand-border text-brand-textMuted hover:border-brand-borderLight hover:text-brand-text"
            }`}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-brand-border text-brand-text transition-all duration-200 hover:border-brand-borderLight hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={onToggle}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className="block h-[2px] w-5 bg-current transition-transform duration-200"
            style={{ transform: isMenuOpen ? "translateY(5px) rotate(45deg)" : undefined }}
          />
          <span
            className="block h-[2px] w-5 bg-current transition-opacity duration-200"
            style={{ opacity: isMenuOpen ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-5 bg-current transition-transform duration-200"
            style={{ transform: isMenuOpen ? "translateY(-5px) rotate(-45deg)" : undefined }}
          />
        </div>
      </button>
    </div>

    {/* Mobile menu */}
    <div
      id="mobile-menu"
      aria-hidden={!isMenuOpen}
      className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
        isMenuOpen
          ? "pointer-events-auto mt-3 max-h-[80vh] opacity-100"
          : "pointer-events-none mt-0 max-h-0 opacity-0"
      }`}
    >
      <div className="mx-auto max-w-[1200px] rounded-2xl border border-brand-border bg-brand-surface/95 px-4 py-5 shadow-card backdrop-blur-xl">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={resolveHref(item.href)}
              className="rounded-xl px-4 py-3 font-display text-base tracking-[0.03em] text-brand-text transition-all duration-200 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 flex gap-2 border-t border-brand-border/50 pt-4" aria-label="Language">
          {(["nl", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => onLocaleChange(code)}
              className={`flex-1 rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all duration-200 ${
                locale === code
                  ? "border-brand-accent/60 bg-brand-accent/10 text-brand-accent"
                  : "border-brand-border text-brand-textMuted hover:border-brand-borderLight hover:text-brand-text"
              }`}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export default Header;
