import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for NMC Technology.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <LegalPage title="Privacy Policy" updated={privacy.updated} content={privacy.content} />;
}
