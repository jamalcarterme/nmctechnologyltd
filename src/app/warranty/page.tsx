import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { warranty } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: "Warranty Policy",
  description: "Warranty Policy for NMC Technology: how we handle solar, CCTV and automation orders, installations and customer protection in Nigeria.",
  path: "/warranty",
});

export default function Page() {
  return <LegalPage title="Warranty Policy" updated={warranty.updated} content={warranty.content} />;
}
