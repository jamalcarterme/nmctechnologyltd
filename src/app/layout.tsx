import type { Metadata, Viewport } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import Preloader from "@/components/Preloader";
import CookieConsent from "@/components/CookieConsent";
import CtaBar from "@/components/CtaBar";
import ScrollHint from "@/components/ScrollHint";
import MotionProvider from "@/components/MotionProvider";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/data";
import { SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--f-body",
  display: "swap",
});

const spaceGrotesk = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "800"],
  style: ["normal", "italic"],
  variable: "--f-head",
  display: "swap",
});

const SITE_TITLE = "NMC Technology | Solar installation & Smart Home Automation";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | NMC Technology",
  },
  description: site.description,
  keywords: [
    "solar installation Lagos",
    "solar power Nigeria",
    "inverter and battery installation",
    "off-grid solar system",
    "lithium battery inverter",
    "CCTV installation Lagos",
    "smart home automation Nigeria",
    "automatic transfer switch panel",
    "generator automation",
    "NMC Technology",
  ],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Google Search Console HTML-tag verification. Set NEXT_PUBLIC_GSC_VERIFICATION
  // to the content value Search Console gives you (not needed if you verify via DNS).
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: site.name,
    title: SITE_TITLE,
    description: site.description,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1600, height: 1200, alt: "NMC Technology solar panel installation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: site.description,
    images: [DEFAULT_OG_IMAGE],
  },
  // Favicons live in /public. Google Search only uses favicons whose size is a
  // multiple of 48px (48, 96, 144, 192...), so those are listed explicitly.
  // The ?v= suffix busts browser/CDN caches after the icon is replaced - bump it
  // whenever the logo files change.
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48x48.png?v=2", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png?v=2", type: "image/png", sizes: "96x96" },
      { url: "/android-chrome-192x192.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [{ url: "/favicon.ico?v=2" }],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  category: "Solar Energy Installation",
};

export const viewport: Viewport = {
  themeColor: "#0a0f14",
  width: "device-width",
  initialScale: 1,
};

const siteLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: site.name,
    alternateName: ["NMC Solar", "NMC Technology Ltd"],
    slogan: site.tagline,
    description: site.description,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    logo: `${SITE_URL}/images/logo.png`,
    url: SITE_URL,
    telephone: site.phones[0].href,
    email: site.email,
    priceRange: "₦₦₦",
    currenciesAccepted: "NGN",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 4A, Block XIV, Opposite Unipetrol Estate",
      addressLocality: "Satellite Town",
      addressRegion: "Lagos",
      addressCountry: "NG",
    },
    areaServed: [
      { "@type": "City", name: "Lagos" },
      { "@type": "Country", name: "Nigeria" },
    ],
    contactPoint: site.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.href,
      contactType: "sales",
      areaServed: "NG",
      availableLanguage: ["English"],
    })),
    sameAs: [site.tiktok, site.instagram, site.facebook, site.youtube],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "NMC Technology services",
      itemListElement: [
        { name: "Solar Power Installation", path: "/services/solar" },
        { name: "CCTV Camera Installation", path: "/services/cctv" },
        { name: "Smart Electrical Automation", path: "/services/automation" },
        { name: "Smart Home Automation", path: "/services/smart-home" },
      ].map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: `${SITE_URL}${s.path}` },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: site.name,
    inLanguage: "en-NG",
    publisher: { "@id": `${SITE_URL}/#business` },
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-NG"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Enables scroll-reveal styles before first paint (skipped when the
            visitor prefers reduced motion). Falls back to fully visible content
            if scripts never finish loading. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches||!("IntersectionObserver" in window))return;d.classList.add("js-reveal");setTimeout(function(){if(!window.__revealReady)d.classList.remove("js-reveal")},8000)}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased">
        <Preloader />
        <JsonLd data={siteLd} />
        <MotionProvider>
          {children}
          <CtaBar />
          <CookieConsent />
          <ScrollHint />
        </MotionProvider>
      </body>
    </html>
  );
    }
