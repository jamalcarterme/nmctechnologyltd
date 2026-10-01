import type { Metadata } from "next";
import { site } from "@/lib/data";

/**
 * Canonical origin of the site. Override in production with
 * NEXT_PUBLIC_SITE_URL (e.g. https://www.yourdomain.com) so that the sitemap,
 * canonicals, Open Graph URLs and structured data always match the live domain
 * registered in Google Search Console.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || site.domain).replace(/\/+$/, "");

export const DEFAULT_OG_IMAGE = "/images/hero-panels.jpg";

export const abs = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

/** Per-page metadata with canonical, Open Graph and Twitter tags that point at the page itself. */
export function pageMeta({ title, description, path, image = DEFAULT_OG_IMAGE, noindex }: PageMetaInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_NG",
      url: path,
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [image],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}

export function serviceLd(opts: { name: string; description: string; path: string; image: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${abs(opts.path)}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: abs(opts.path),
    image: abs(opts.image),
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: [
      { "@type": "City", name: "Lagos" },
      { "@type": "Country", name: "Nigeria" },
    ],
  };
}
