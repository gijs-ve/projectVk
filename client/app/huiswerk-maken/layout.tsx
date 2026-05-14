import type { Metadata } from "next";
import { absoluteUrl, defaultOgImage, siteName } from "../lib/seo";

const title = "Huiswerk Maken";
const description = `Voordat de bom valt — songtekst bij ${siteName}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/huiswerk-maken" },
  openGraph: {
    type: "article",
    url: absoluteUrl("/huiswerk-maken"),
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

export default function HuiswerkMakenLayout({ children }: { children: React.ReactNode }) {
  return children;
}
