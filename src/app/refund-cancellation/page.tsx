import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { refund } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: "Refund & Cancellation Policy",
  description: "Refund & Cancellation Policy for NMC Technology: how we handle solar, CCTV and automation orders, installations and customer protection in Nigeria.",
  path: "/refund-cancellation",
});

export default function Page() {
  return <LegalPage title="Refund & Cancellation Policy" updated={refund.updated} content={refund.content} />;
}
