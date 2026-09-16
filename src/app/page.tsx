import AutomationGrid from "@/components/AutomationGrid";
import BenefitsSection from "@/components/BenefitsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import PackagesTeaser from "@/components/PackagesTeaser";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Container, Reveal } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HomeShowcase />
        <BenefitsSection />
        <PackagesTeaser />
        <AutomationGrid />
        <WhyChooseUs />
        <Testimonials />

        <section className="bg-charcoal py-16 md:py-20 border-t border-paper/10">
          <Container className="text-center">
            <Reveal>
              <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
                Ready to get started?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
                Let us help bring your vision to life with innovative solutions.
              </p>
            </Reveal>
            <Reveal variant="pop" delay={0.2}>
              <a
                href="/get-quote"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
              >
                Request a Quote
              </a>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
