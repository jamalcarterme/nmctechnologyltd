import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import ServiceCategories from "@/components/ServiceCategories";
import Services from "@/components/Services";
import { Container, Eyebrow, Reveal } from "@/components/ui";
import { servicesInfo } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Solar, CCTV, Automation & Smart Home Services in Lagos",
  description:
    "Solar power, CCTV security, smart electrical automation (ATS, generator control) and smart home installation for homes, offices and estates across Lagos and Nigeria — all installed in-house by NMC Technology.",
  path: "/services",
});

const pageLd = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={pageLd} />
      <Header />
      <main className="pt-20">
        <ServiceCategories />
        <Services />
        <InfoSection
          eyebrow="In depth"
          title="A closer look at every service we offer"
          intro="From a single studio apartment to a multi-inverter commercial site, here's exactly what each service involves."
          blocks={servicesInfo}
          className="bg-charcoal"
        />
        <section className="bg-ink py-16 md:py-20 border-t border-paper/10">
          <Container className="text-center">
            <Reveal>
              <Eyebrow>Questions?</Eyebrow>
              <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
                Have more questions?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
                Check out our frequently asked questions for more details about our services and how we can help.
              </p>
            </Reveal>
            <Reveal variant="pop" delay={0.2}>
              <a
                href="/about#faqs"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
              >
                See Our FAQ
              </a>
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
