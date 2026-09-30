import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { warranty } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Warranty Policy",
  description: "Warranty Policy for NMC Technology.",
  alternates: { canonical: "/warranty" },
};

export default function Page() {
  return <LegalPage title="Warranty Policy" updated={warranty.updated} content={warranty.content} />;
}
