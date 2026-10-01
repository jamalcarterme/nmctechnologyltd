import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbLd, serviceLd } from "@/lib/seo";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import { projectsInfo } from "@/lib/content";

export const metadata: Metadata = pageMeta({
  title: "Recent Solar & Electrical Projects in Lagos",
  description:
    "Photos of solar inverter rooms, rooftop arrays, ATS and automation panels completed by NMC Technology across Lagos and Nigeria, installed by our own engineers.",
  path: "/projects",
});

const pageLd = breadcrumbLd([
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
]);

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={pageLd} />
      <Header />
      <main className="pt-20">
        <Gallery />
        <InfoSection
          eyebrow="Our projects"
          title="From Ideas to Reality"
          blocks={projectsInfo}
          className="bg-charcoal"
        />
      </main>
      <Footer />
    </>
  );
}
