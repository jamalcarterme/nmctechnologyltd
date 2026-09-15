import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import { contactFaqs, contactInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp or send your details to NMC Technology for a free solar site survey and quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Contact />
        <InfoSection
          eyebrow="Before you reach out"
          title="Get the fastest, most accurate response"
          blocks={contactInfo}
          className="bg-ink"
        />
        <Faq title="Contact FAQs" items={contactFaqs} className="bg-charcoal" />
      </main>
      <Footer />
    </>
  );
}
