import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import QuoteServiceGrid from "@/components/QuoteServiceGrid";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Choose the service you're interested in — Solar, CCTV, Smart Electrical Automation, or Smart Home Automation — to get a tailored free quote from NMC Technology.",
  alternates: { canonical: "/get-quote" },
};

export default function GetQuotePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/team-photo.jpg"
          eyebrow="Get a Free Quote"
          title="Which Service Do You Need?"
          subtitle="Pick a service below and we'll ask a few quick questions so we can put together an accurate, free quote for you."
        />

        <QuoteServiceGrid />
      </main>
      <Footer />
    </>
  );
}
