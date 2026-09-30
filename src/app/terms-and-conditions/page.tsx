import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions for NMC Technology.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function Page() {
  return <LegalPage title="Terms & Conditions" updated={terms.updated} content={terms.content} />;
}
