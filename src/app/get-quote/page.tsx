import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, Sun, Wifi, Zap } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import { Container, Reveal } from "@/components/ui";
import { quoteServices } from "@/lib/quoteServices";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Choose the service you're interested in — Solar, CCTV, Smart Electrical Automation, or Smart Home Automation — to get a tailored free quote from NMC Technology.",
  alternates: { canonical: "/get-quote" },
};

const icons = { Sun, Camera, Zap, Wifi };

export default function GetQuotePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/installer-panel-1.jpg"
          eyebrow="Get a Free Quote"
          title="Which Service Do You Need?"
          subtitle="Pick a service below and we'll ask a few quick questions so we can put together an accurate, free quote for you."
        />

        <section className="bg-ink py-16 md:py-20">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2">
              {quoteServices.map((service, i) => {
                const Icon = icons[service.icon];
                const animationVariant = i % 2 === 0 ? "pop" : "scale";
                return (
                  <Reveal key={service.slug} delay={i * 0.08} variant={animationVariant}>
                    <Link
                      href={`/get-quote/${service.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-paper/12 bg-paper/[0.03] p-7 transition-colors hover:border-gold/60"
                    >
                      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                      </span>
                      <h2 className="font-display mt-5 text-[20px] font-semibold text-paper">
                        {service.label}
                      </h2>
                      <p className="mt-2 text-[14px] leading-relaxed text-paper/60">
                        {service.description}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-gold">
                        Get a quote
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </Reveal>
                );
              })}
            </div>

            <p className="mt-10 text-center text-[14px] text-paper/50">
              Not sure which service fits your needs?{" "}
              <Link href="/contact" className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light">
                Contact us directly
              </Link>{" "}
              and we&apos;ll help you figure it out.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
