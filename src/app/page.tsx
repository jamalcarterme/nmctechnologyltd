import About from "@/components/About";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import ServiceCategories from "@/components/ServiceCategories";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { homeFaqs, homeInfo } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceCategories />
        <Services />
        <Packages />
        <Process />
        <Gallery />
        <Testimonials />
        <About />
        <InfoSection
          eyebrow="About our approach"
          title="Professional solutions for every service we offer"
          intro="From solar systems to security and automation, here's what guides how we work with clients."
          blocks={homeInfo}
          className="bg-charcoal"
        />
        <Faq
          title="Common questions, answered"
          intro="Questions we hear from homeowners and businesses considering any of our services."
          items={homeFaqs}
          className="bg-ink"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
