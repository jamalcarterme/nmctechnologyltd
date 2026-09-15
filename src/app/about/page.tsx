import type { Metadata } from "next";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import { aboutFaqs, aboutInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NMC Technology is a Lagos-based solar engineering company installing inverter, lithium battery and panel systems for homes and businesses since day one, in-house.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <About />
        <InfoSection
          eyebrow="Our story"
          title="Why we install everything ourselves"
          blocks={aboutInfo}
          className="bg-charcoal"
        />
        <Faq title="About NMC Technology" items={aboutFaqs} className="bg-ink" />
      </main>
      <Footer />
    </>
  );
}
