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
  const baseClasses =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const toneClasses =
    tone === "solid"
      ? "bg-brand-accent text-brand-surface hover:bg-brand-glow focus-visible:outline-brand-glow"
      : "border border-brand-border text-brand-text hover:border-brand-accent hover:text-brand-accent focus-visible:outline-brand-accent";
  const resolvedHref = normalizeHref(href);

  return (
    <Link href={resolvedHref} className={`${baseClasses} ${toneClasses}`}>
      <span>{label}</span>
      <ArrowIcon className="h-4 w-4" />
    </Link>
  );
};

export default ArrowLink;
