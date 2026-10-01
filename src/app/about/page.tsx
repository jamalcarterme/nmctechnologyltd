import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd } from "@/lib/seo";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Leadership from "@/components/Leadership";
import MissionGrid from "@/components/MissionGrid";
import NmcStory from "@/components/NmcStory";
import PageHero from "@/components/PageHero";
import WhoWeServe from "@/components/WhoWeServe";
import { aboutFaqs, aboutInfo } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "About NMC Technology: Solar & Smart Electrical Engineers",
  description:
    "NMC Technology is a Lagos-based engineering company delivering solar, CCTV, smart electrical automation and smart home solutions across Nigeria, with every installation done by our own team.",
  path: "/about",
});

const pageLd = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function AboutPage() {
  return (
    <>
      <JsonLd data={pageLd} />
      <Header />
      <main>
        <PageHero
          image="/images/team-photo.jpg"
          eyebrow="NMC Technology"
          title="About Us"
          subtitle="Engineering technology, powering possibilities — for homes and businesses across Nigeria."
        />
        <About />
        <Leadership />
        <NmcStory />
        <InfoSection
          title="Why we install everything ourselves"
          blocks={aboutInfo}
          className="bg-charcoal"
        />
        <MissionGrid />
        <WhoWeServe />
        <Faq title="About NMC Technology" items={aboutFaqs} className="bg-ink" />
      </main>
      <Footer />
    </>
  );
}
