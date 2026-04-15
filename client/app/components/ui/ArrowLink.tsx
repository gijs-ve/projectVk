import Link from "next/link";
import ArrowIcon from "./ArrowIcon";

type ArrowLinkTone = "solid" | "ghost";

type ArrowLinkProps = {
  href: string;
  label: string;
  tone?: ArrowLinkTone;
};

const normalizeHref = (href: string) => (href.startsWith("#") ? `/${href}` : href);

const ArrowLink = ({ href, label, tone = "solid" }: ArrowLinkProps) => {
  const resolvedHref = normalizeHref(href);

  return (
    <Link
      href={resolvedHref}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
        tone === "solid"
          ? "bg-brand-accent text-brand-bg shadow-glow hover:bg-brand-glow hover:shadow-glow-lg focus-visible:outline-brand-glow"
          : "border border-brand-border text-brand-text hover:border-brand-accent/60 hover:text-brand-accent focus-visible:outline-brand-accent"
      }`}
    >
      {tone === "solid" && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative">{label}</span>
      <ArrowIcon className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

export default ArrowLink;
