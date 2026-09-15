import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Packages from "@/components/Packages";
import { packagesFaqs, packagesInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Transparent solar inverter, battery and panel packages from 3.5KVA to 30KVA, with pricing, backup times and what each tier can power.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Packages />
        <InfoSection
          eyebrow="Understanding the numbers"
          title="How to choose the right package for your property"
          blocks={packagesInfo}
          className="bg-charcoal"
        />
        <Faq
          title="Packages & pricing FAQs"
          items={packagesFaqs}
          className="bg-ink"
        />
      </main>
      <Footer />
    </>
  );
}
