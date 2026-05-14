import type { Metadata } from "next";
import { absoluteUrl, business, defaultOgImage, siteName } from "../lib/seo";

const title = "Contact";
const description = `Contact en bezoekinformatie van ${siteName} aan de ${business.streetAddress}, ${business.addressLocality}. Bel ${business.telephone} of loop binnen.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: absoluteUrl("/contact"),
    siteName,
    title: `${title} | ${siteName}`,
    description,
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${siteName}`,
    description,
    images: [defaultOgImage],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
