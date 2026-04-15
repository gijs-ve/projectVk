import Image from "next/image";
import Link from "next/link";
import type { HeroContent } from "@/app/types/content";
import ArrowLink from "../ui/ArrowLink";
import GlowOrb from "../ui/GlowOrb";
import WarmWave from "../ui/WarmWave";

type HeroProps = {
  content: HeroContent;
};

const Hero = ({ content }: HeroProps) => (
  <section id="home" className="relative overflow-hidden rounded-2xl border border-brand-border shadow-deep sm:rounded-3xl">
    {/* Background layers */}
    <div className="absolute inset-0 bg-gradient-to-br from-brand-overlay via-brand-surface to-brand-bg" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(107,45,62,0.15),transparent_50%)]" aria-hidden />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_100%,rgba(196,80,26,0.08),transparent_50%)]" aria-hidden />

    {/* Glow orbs */}
    <GlowOrb className="-top-32 -left-32 animate-pulse-warm" color="rgba(224, 177, 90, 0.07)" size="500px" />
    <GlowOrb className="-bottom-24 -right-24" color="rgba(107, 45, 62, 0.06)" size="400px" />

    {/* Content */}
    <div className="relative px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14">
        {/* Text column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-brand-accent to-transparent" />
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-brand-accent/80">
              {content.eyebrow}
            </p>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-wide text-brand-text sm:text-5xl lg:text-6xl">
            {content.heading}
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-brand-textMuted lg:text-xl">
            {content.subheading}
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
            <ArrowLink href={content.primaryCta.href} label={content.primaryCta.label} />
            <ArrowLink href={content.secondaryCta.href} label={content.secondaryCta.label} tone="ghost" />
          </div>

          <div className="flex flex-wrap gap-2.5 pt-4">
            {content.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-brand-overlay/60 px-3.5 py-2 text-xs text-brand-textMuted backdrop-blur-sm transition-colors hover:border-brand-borderLight hover:text-brand-text"
              >
                <span className="h-1 w-1 rounded-full bg-brand-accent/60" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="group relative">
          <div className="relative h-[320px] overflow-hidden rounded-2xl border border-brand-border bg-brand-overlay/70 shadow-card sm:h-[380px] lg:h-[440px]">
            <Image
              src="/events/event1.jpg"
              alt="FLUJAS curated night at Cafe Vader Klaassens"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 520px, 100vw"
            />
            {/* Warm overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-brand-bg/20 to-transparent" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-wine/10 to-transparent mix-blend-overlay" aria-hidden />

            {/* Bottom info bar */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6">
              <div>
                <p className="text-xs text-brand-textMuted/80">{content.tonight.label}</p>
                <p className="mt-0.5 text-sm font-medium text-brand-text">{content.tonight.value}</p>
              </div>
              <Link
                href={content.tonight.href ?? "/events"}
                className="rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-bg shadow-glow transition-all duration-300 hover:bg-brand-glow hover:shadow-glow-lg"
              >
                {content.tonight.pill}
              </Link>
            </div>
          </div>

          {/* Decorative accent below image */}
          <div className="absolute -bottom-3 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full bg-brand-accent/5 blur-2xl" aria-hidden />
        </div>
      </div>
    </div>

    {/* Bottom wave transition */}
    <WarmWave color="var(--color-brand-bg)" className="absolute bottom-0 left-0 right-0" />
  </section>
);

export default Hero;
