import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "./lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Vader Klaassens",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#1c140f",
    theme_color: "#1c140f",
    lang: "nl-NL",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
