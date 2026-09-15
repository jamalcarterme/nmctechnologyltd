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
import WhyChooseUs from "@/components/WhyChooseUs";
import { Container, Eyebrow } from "@/components/ui";
import { homeFaqs, homeInfo } from "@/lib/content";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceCategories />
        <Services />
        <WhyChooseUs />
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
        <section className="bg-ink py-24 md:py-28 border-t border-paper/10">
          <Container className="text-center">
            <Eyebrow>Need a solution?</Eyebrow>
            <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
              Let&apos;s Turn Your Idea Into Reality.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
              Whether you are planning a solar installation, upgrading your electrical system, securing your property with CCTV, or building a smart home, NMC Technology is ready to help. Tell us what you need, and we&apos;ll help you find the right solution.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
            >
              Request a Quote
            </a>
          </Container>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
