import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { refund } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "Refund & Cancellation Policy for NMC Technology.",
  alternates: { canonical: "/refund-cancellation" },
};

export default function Page() {
  return <LegalPage title="Refund & Cancellation Policy" updated={refund.updated} content={refund.content} />;
}
