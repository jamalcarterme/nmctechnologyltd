import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Packages from "@/components/Packages";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import ServicePricing from "@/components/ServicePricing";
import { Container, Eyebrow } from "@/components/ui";
import { packagesInfo } from "@/lib/content";
import { cctvPricingTiers, automationPricingTiers, smartHomePricingTiers } from "@/lib/pricing";
import { getQuoteService, quoteServices } from "@/lib/quoteServices";

export function generateStaticParams() {
  return quoteServices.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getQuoteService(slug);
  if (!service) return { title: "Packages & Pricing" };
  return {
    title: `Packages & Pricing — ${service.label}`,
    description: `Pricing tiers for ${service.label} from NMC Technology.`,
    alternates: { canonical: `/packages/${service.slug}` },
  };
}

const tiersByService: Record<string, typeof cctvPricingTiers> = {
  cctv: cctvPricingTiers,
  automation: automationPricingTiers,
  "smart-home": smartHomePricingTiers,
};

export default async function PackagesServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getQuoteService(slug);
  if (!service) notFound();

  if (service.slug === "solar") {
    return (
      <>
        <Header />
        <main>
          <PageHero
            image="/images/rooftop-panels-3.jpg"
            eyebrow="NMC Technology"
            title="Solar Packages"
            subtitle="Explore NMC Technology packages and select the capacity that best suits your property."
          />
          <Packages />

          <section className="bg-charcoal py-16 md:py-20">
            <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
              <div>
                <Eyebrow>Before you choose</Eyebrow>
                <h2 className="balance mt-4 text-[28px] font-semibold leading-tight text-paper sm:text-[32px]">
                  Get A Package
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
                  To move ahead with any of our packages, kindly fill the form and our team will reach out to you as soon as possible with next steps and a confirmed site survey date.
                </p>
                <ul className="mt-6 flex flex-col gap-3 text-[14px] leading-relaxed text-paper/60">
                  <li>• Installation logistics are confirmed after a free site survey.</li>
                  <li>• Prices reflect current equipment costs and may be revised without prior notice.</li>
                  <li>• A rough appliance list speeds up an accurate recommendation.</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-paper/10 bg-ink p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] md:p-10">
                <h3 className="font-display text-[20px] font-semibold text-paper">
                  Request your free quote
                </h3>
                <p className="mt-2 text-[15px] text-paper/60">
                  Tell us about your property and we&apos;ll recommend the right package.
                </p>
                <div className="mt-7">
                  <QuoteForm compact />
                </div>
              </div>
            </Container>
          </section>

          <InfoSection
            eyebrow="Understanding the numbers"
            title="How to choose the right package for your property"
            blocks={packagesInfo}
            className="bg-ink"
          />
        </main>
        <Footer />
      </>
    );
  }

  const tiers = tiersByService[service.slug] ?? [];

  return (
    <>
      <Header />
      <main>
        <PageHero
          image={service.heroImage}
          eyebrow="Packages & Pricing"
          title={service.label}
          subtitle={service.description}
        />

        <section className="bg-ink py-10 md:py-12">
          <Container>
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-paper/60 hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Choose a different service
            </Link>
          </Container>
        </section>

        <ServicePricing
          eyebrow={`${service.shortLabel} Packages`}
          title="Packages Sized by Your Needs"
          description="Pick the tier closest to your property size. Every package includes supply, professional installation and setup."
          tiers={tiers}
          waIntro={`Hi NMC Technology, I'm interested in a ${service.label} package.`}
        />

        <section className="bg-charcoal py-16 md:py-20">
          <Container className="text-center">
            <Eyebrow>Ready to move ahead?</Eyebrow>
            <h2 className="balance mt-4 text-[28px] font-semibold leading-tight text-paper sm:text-[32px]">
              Get a tailored quote for {service.shortLabel}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
              Tell us a bit about your property and we&apos;ll recommend the right package for you.
            </p>
            <Link
              href={`/get-quote/${service.slug}`}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
            >
              Get My Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
