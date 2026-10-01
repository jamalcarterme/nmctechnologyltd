import type { MetadataRoute } from "next";
import { quoteServices } from "@/lib/quoteServices";
import { abs } from "@/lib/seo";

// Bump this date whenever page content meaningfully changes. A stable date is
// a better signal to Google than a new timestamp on every build.
const CONTENT_UPDATED = new Date("2026-10-01");

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const e = (
    path: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"],
    images?: string[],
  ): Entry => ({
    url: abs(path === "/" ? "" : path) || abs("/"),
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
    ...(images ? { images: images.map(abs) } : {}),
  });

  return [
    e("/", 1, "weekly", ["/images/hero-panels.jpg"]),

    // Core service pages (highest commercial value)
    e("/services", 0.9, "monthly"),
    e("/services/solar", 0.9, "monthly", ["/images/solar-inverters-growatt.jpg"]),
    e("/services/cctv", 0.9, "monthly", ["/images/cctv-cube-camera-wall.jpg"]),
    e("/services/automation", 0.9, "monthly", ["/images/electrical-automation-team.jpg"]),
    e("/services/smart-home", 0.9, "monthly", ["/images/smart-home-automation.jpg"]),

    // Pricing / packages
    e("/packages", 0.8, "monthly"),
    ...quoteServices.map((s) => e(`/packages/${s.slug}`, 0.8, "monthly")),

    // Trust & conversion pages
    e("/projects", 0.7, "weekly"),
    e("/reviews", 0.7, "weekly"),
    e("/about", 0.6, "monthly"),
    e("/contact", 0.7, "yearly"),
    e("/get-quote", 0.7, "yearly"),

    // Legal
    e("/privacy-policy", 0.3, "yearly"),
    e("/terms-and-conditions", 0.3, "yearly"),
    e("/warranty", 0.3, "yearly"),
    e("/refund-cancellation", 0.3, "yearly"),
  ];
}
