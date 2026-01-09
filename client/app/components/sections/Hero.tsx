import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/app/types/content";
import ArrowLink from "../ui/ArrowLink";

type HeroProps = {
  content: HeroContent;
};

const Hero = ({ content }: HeroProps) => (
  <section
    id="home"
    className="relative overflow-hidden rounded-3xl border border-brand-border bg-gradient-to-br from-brand-overlay via-brand-surface to-brand-bg px-6 py-12 shadow-deep sm:px-10 sm:py-14 lg:px-14 lg:py-16"
  >
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,theme(colors.brand.glow)/0.12,transparent_35%)]"
      aria-hidden
    />
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,theme(colors.brand.accentMuted)/0.14,transparent_25%)]"
      aria-hidden
    />
    <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-5">
        <p className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-brand-textMuted">
          {content.eyebrow}
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-brand-text sm:text-5xl lg:text-6xl">
          {content.heading}
        </h1>
        <p className="max-w-2xl text-lg text-brand-textMuted lg:text-xl">
          {content.subheading}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <ArrowLink href={content.primaryCta.href} label={content.primaryCta.label} />
          <ArrowLink href={content.secondaryCta.href} label={content.secondaryCta.label} tone="ghost" />
        </div>
        <div className="flex flex-wrap gap-3 pt-4 text-sm text-brand-textMuted">
          {content.badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/5 px-3 py-2"
            >
              ✦ {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="relative h-[320px] overflow-hidden rounded-2xl border border-brand-border bg-brand-overlay/70 shadow-deep sm:h-[380px] lg:h-[420px]">
        <Image
          src="/events/event1.jpg"
          alt="FLUJAS curated night at Cafe Vader Klaassens"
          fill
          priority
          className="object-cover"
          sizes="(min-width: 1024px) 520px, 100vw"
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,theme(colors.brand.accent)/0.18,transparent_30%),radial-gradient(circle_at_70%_70%,theme(colors.brand.accentMuted)/0.18,transparent_35%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(130deg,rgba(0,0,0,0.45),transparent_45%),linear-gradient(310deg,rgba(0,0,0,0.5),transparent_55%)]"
          aria-hidden
        />
        <div className="relative h-full w-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.03)_0,rgba(255,255,255,0.03)_1px,transparent_1px,transparent_24px)]" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-5 text-sm text-brand-text">
          <div>
            <p className="text-brand-textMuted">{content.tonight.label}</p>
            <p className="font-medium">{content.tonight.value}</p>
          </div>
          <Link
            href="/events"
            className="rounded-full bg-brand-accent/90 px-4 py-2 text-brand-surface font-semibold shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] transition-colors hover:bg-brand-accent"
          >
            {content.tonight.pill}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
