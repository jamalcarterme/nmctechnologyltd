import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd } from "@/lib/seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Testimonials from "@/components/Testimonials";
import { reviewsInfo } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Client Reviews & Testimonials",
  description:
    "Read what homeowners and businesses say about their solar, CCTV and automation installations with NMC Technology in Lagos and across Nigeria.",
  path: "/reviews",
});

const pageLd = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
]);

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={pageLd} />
      <Header />
      <main className="pt-20">
        <Testimonials />
        <InfoSection
          eyebrow="Feedback"
          title="What clients tell us matters most"
          blocks={reviewsInfo}
          className="bg-charcoal"
        />
      </main>
      <Footer />
    </>
  );
}
