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
  <header className="sticky top-[max(env(safe-area-inset-top),0.75rem)] md:top-0 z-30 backdrop-blur">
    <div className="mx-auto flex max-w-content items-center justify-between rounded-full border border-brand-border bg-brand-overlay/75 px-4 py-3 text-brand-text shadow-medium sm:px-6 lg:px-8">
      <Link href="/" className="flex items-center gap-3" aria-label="Go to home">
        <div className="leading-tight">
          <p className="text-sm text-brand-textMuted">{strapline}</p>
          <p className="text-lg font-semibold font-display tracking-[0.02em]">{pubName}</p>
        </div>
      </Link>

      <nav className="hidden items-center gap-1 text-sm font-semibold font-display tracking-[0.03em] md:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={resolveHref(item.href)}
            className="rounded-full px-4 py-2 text-brand-textMuted transition-colors hover:text-brand-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-2 md:flex" aria-label="Language">
        {["nl", "en"].map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => onLocaleChange(code as Locale)}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
              locale === code
                ? "border-brand-accent text-brand-text"
                : "border-brand-border text-brand-textMuted hover:border-brand-accent"
            }`}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-border text-brand-text transition-colors hover:border-brand-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent md:hidden"
        aria-label="Toggle navigation"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={onToggle}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className="block h-[2px] w-5 bg-current transition-transform"
            style={{ transform: isMenuOpen ? "translateY(6px) rotate(45deg)" : undefined }}
          />
          <span
            className="block h-[2px] w-5 bg-current transition-opacity"
            style={{ opacity: isMenuOpen ? 0 : 1 }}
          />
          <span
            className="block h-[2px] w-5 bg-current transition-transform"
            style={{ transform: isMenuOpen ? "translateY(-6px) rotate(-45deg)" : undefined }}
          />
        </div>
      </button>
    </div>

    <div
      id="mobile-menu"
      aria-hidden={!isMenuOpen}
      className={`md:hidden overflow-hidden transition-[max-height,opacity,margin] duration-200 ${
        isMenuOpen
          ? "pointer-events-auto opacity-100 mt-3 max-h-[80vh]"
          : "pointer-events-none opacity-0 mt-0 max-h-0"
      }`}
    >
      <div className="mx-auto max-w-content rounded-2xl border border-brand-border bg-brand-overlay/95 px-4 py-4 shadow-xl">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={resolveHref(item.href)}
              className="rounded-xl px-3 py-3 text-base text-brand-text font-display tracking-[0.03em] transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-4 flex gap-2" aria-label="Language">
          {["nl", "en"].map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => onLocaleChange(code as Locale)}
              className={`flex-1 rounded-full border px-3 py-2 text-sm font-semibold transition-colors ${
                locale === code
                  ? "border-brand-accent text-brand-text"
                  : "border-brand-border text-brand-textMuted hover:border-brand-accent"
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
