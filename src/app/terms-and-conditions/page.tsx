import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: "Terms & Conditions",
  description: "Terms & Conditions for NMC Technology: how we handle solar, CCTV and automation orders, installations and customer protection in Nigeria.",
  path: "/terms-and-conditions",
});

export default function Page() {
  return <LegalPage title="Terms & Conditions" updated={terms.updated} content={terms.content} />;
}
