import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { quoteServices } from "@/lib/quoteServices";

// Served at /sitemap.xml. Built from the same SITE_URL as robots.ts and the
// canonical tags, so the sitemap host can never drift from the live domain.
// Update this date when page content meaningfully changes.
const LAST_MODIFIED = new Date("2026-10-03");

type Entry = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const pages: Entry[] = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },

  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/solar", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/cctv", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/automation", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services/smart-home", changeFrequency: "monthly", priority: 0.9 },

  { path: "/packages", changeFrequency: "monthly", priority: 0.8 },
  // One page per service slug (solar, cctv, automation, smart-home)
  ...quoteServices.map((s) => ({
    path: `/packages/${s.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),

  { path: "/projects", changeFrequency: "weekly", priority: 0.7 },
  { path: "/reviews", changeFrequency: "weekly", priority: 0.7 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/get-quote", changeFrequency: "yearly", priority: 0.7 },

  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.3 },
  { path: "/warranty", changeFrequency: "yearly", priority: 0.3 },
  { path: "/refund-cancellation", changeFrequency: "yearly", priority: 0.3 },
  // /get-quote/<service> pages are intentionally left out: they are noindex form pages.
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
