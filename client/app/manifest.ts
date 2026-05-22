import type { MetadataRoute } from "next";
import { siteDescription, siteName, siteShortName } from "./lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: siteShortName,
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#1c140f",
    theme_color: "#1c140f",
    lang: "nl-NL",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
