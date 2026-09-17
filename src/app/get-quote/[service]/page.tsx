import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServiceQuoteForm from "@/components/ServiceQuoteForm";
import { Container } from "@/components/ui";
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
  if (!service) return { title: "Get a Free Quote" };
  return {
    title: `Get a Free Quote — ${service.label}`,
    description: `Tell us what you need for ${service.label} and we'll send a tailored free quote.`,
    alternates: { canonical: `/get-quote/${service.slug}` },
  };
}

export default async function GetQuoteServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const service = getQuoteService(slug);
  if (!service) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHero
          image={service.heroImage}
          eyebrow="Get a Free Quote"
          title={service.label}
          subtitle={service.description}
        />

        <section className="bg-ink py-16 md:py-20">
          <Container className="max-w-xl">
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 text-[14px] font-semibold text-paper/60 hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Choose a different service
            </Link>

            <div className="mt-8 rounded-3xl border border-paper/10 bg-charcoal p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] md:p-10">
              <h2 className="font-display text-[20px] font-semibold text-paper">
                Request your free quote
              </h2>
              <p className="mt-2 text-[15px] text-paper/60">
                Tell us a bit more and we&apos;ll recommend the right package for you.
              </p>
              <div className="mt-7">
                <ServiceQuoteForm service={service} />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
