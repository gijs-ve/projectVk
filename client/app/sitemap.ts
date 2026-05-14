import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";
import { getAllEvents } from "./content/events";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://vaderklaassens.nl").replace(/\/$/, "");

type DynamicEntry = { path: string; lastModified?: Date };

// Add an entry here whenever a new dynamic route is introduced. The key is the
// route template using Next.js bracket syntax; the provider returns concrete
// URL paths to emit. Templates without a provider trigger a build-time warning.
const dynamicProviders: Record<string, () => DynamicEntry[]> = {
  "/events/[slug]/[date]": () =>
    getAllEvents().map((event) => ({
      path: `/events/${event.slug}/${event.date}`,
    })),
};

const APP_DIR = path.join(process.cwd(), "app");
const PAGE_FILE = /^page\.(tsx|ts|jsx|js)$/;

const isRouteGroup = (segment: string) => segment.startsWith("(") && segment.endsWith(")");
const isPrivateFolder = (segment: string) => segment.startsWith("_");

function templateFromSegments(segments: string[]): string {
  const visible = segments.filter((s) => !isRouteGroup(s));
  return visible.length === 0 ? "/" : "/" + visible.join("/");
}

function collectRouteTemplates(dir: string, segments: string[] = []): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const templates: string[] = [];

  if (entries.some((e) => e.isFile() && PAGE_FILE.test(e.name))) {
    templates.push(templateFromSegments(segments));
  }

  for (const entry of entries) {
    if (!entry.isDirectory() || isPrivateFolder(entry.name)) continue;
    templates.push(...collectRouteTemplates(path.join(dir, entry.name), [...segments, entry.name]));
  }

  return templates;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const template of collectRouteTemplates(APP_DIR)) {
    if (!template.includes("[")) {
      entries.push({ url: `${BASE_URL}${template}`, lastModified: now });
      continue;
    }
    const provider = dynamicProviders[template];
    if (!provider) {
      console.warn(`[sitemap] No provider registered for dynamic route: ${template}`);
      continue;
    }
    for (const { path: routePath, lastModified } of provider()) {
      entries.push({ url: `${BASE_URL}${routePath}`, lastModified: lastModified ?? now });
    }
  }

  return entries;
}
