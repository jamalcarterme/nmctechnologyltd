# SEO & Search Console setup

## Before you deploy
1. Copy `.env.example` to `.env.local` (or set the variables in your host, e.g. Vercel) and set
   `NEXT_PUBLIC_SITE_URL` to your real live domain. Every canonical, the sitemap, robots.txt and
   structured data use it.
2. Deploy, then check: `/sitemap.xml`, `/robots.txt`, and view-source on a page for the JSON-LD.

## Google Search Console
1. Add a property (Domain via DNS is best, or URL-prefix with the exact live URL).
2. If using the HTML-tag method, put the token in `NEXT_PUBLIC_GSC_VERIFICATION` and redeploy.
3. Sitemaps > submit `sitemap.xml`.
4. URL Inspection > Request indexing for: `/`, `/services/solar`, `/services/cctv`,
   `/services/automation`, `/services/smart-home`.

## What was added
- Complete `sitemap.xml` (20 URLs incl. service and package pages) with stable lastModified.
- `robots.txt` without the deprecated `host` line; `/get-quote/<service>` forms are `noindex,follow`.
- Unique keyword-targeted title + description + canonical + Open Graph/Twitter per page
  (fixed the duplicated "| NMC Technology | NMC Technology" titles).
- Structured data: LocalBusiness (with phones, areaServed, service catalog), WebSite,
  Service + BreadcrumbList on service pages, BreadcrumbList on other pages (FAQPage already existed).
- Removed the large background-video preload (hurts load speed / Core Web Vitals).
- `lang="en-NG"`, security + caching headers, AVIF/WebP images, manifest description.

## Still on you (cannot be done in code)
- Create/verify a Google Business Profile for the Satellite Town, Lagos address; keep NAP identical to the site.
- Get real reviews on Google and link to them; then add review markup only for genuine, visible reviews.
- Publish helpful content (e.g. "how to size a solar inverter in Nigeria") and earn local backlinks.
- Add descriptive alt text to gallery photos and hero images where `alt=""` is used for content images.
