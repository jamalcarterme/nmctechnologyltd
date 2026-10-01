import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/lib/legal";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description: "Privacy Policy for NMC Technology: how we handle solar, CCTV and automation orders, installations and customer protection in Nigeria.",
  path: "/privacy-policy",
});

export default function Page() {
  return <LegalPage title="Privacy Policy" updated={privacy.updated} content={privacy.content} />;
}
