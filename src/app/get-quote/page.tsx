import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import QuoteServiceGrid from "@/components/QuoteServiceGrid";

export const metadata: Metadata = pageMeta({
  title: "Get a Free Quote for Solar, CCTV & Smart Automation",
  description:
    "Choose your service (Solar, CCTV, Smart Electrical Automation or Smart Home) and get a tailored free quote from NMC Technology in Lagos.",
  path: "/get-quote",
});

const pageLd = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: "Get a Free Quote", path: "/get-quote" },
]);

export default function GetQuotePage() {
  return (
    <>
      <JsonLd data={pageLd} />
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
