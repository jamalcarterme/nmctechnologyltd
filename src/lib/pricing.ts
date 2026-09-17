import type { ServicePricingTier } from "@/components/ServicePricing";

export const cctvPricingTiers: ServicePricingTier[] = [
  {
    name: "Essential",
    tagline: "2–4 cameras",
    bestFor: "Best for small apartments & single entrances",
    features: [
      "HD dome or bullet cameras",
      "NVR/DVR with local storage",
      "Mobile app remote viewing",
      "Motion alert notifications",
    ],
  },
  {
    name: "Standard",
    tagline: "5–8 cameras",
    bestFor: "Best for family homes & small offices",
    features: [
      "Mix of indoor & outdoor HD/IP cameras",
      "Extended local storage (2–4 weeks)",
      "Mobile app + multi-user access",
      "Motion alerts & night vision coverage",
    ],
    popular: true,
  },
  {
    name: "Advanced",
    tagline: "9+ cameras",
    bestFor: "Best for estates, commercial sites & multi-building properties",
    features: [
      "Full-property IP camera coverage",
      "High-capacity storage or cloud backup",
      "PTZ / solar-powered camera options",
      "Backup power integration & priority support",
    ],
  },
];

export const automationPricingTiers: ServicePricingTier[] = [
  {
    name: "Essential",
    tagline: "Single automation function",
    bestFor: "Best for one core need, e.g. ATS or generator auto-start",
    features: [
      "Automatic Transfer Switch (ATS) or generator automation",
      "Manual override included",
      "Basic surge protection",
      "1-year workmanship warranty",
    ],
  },
  {
    name: "Standard",
    tagline: "Multi-system automation",
    bestFor: "Best for homes combining solar, generator & mains switching",
    features: [
      "ATS + generator automation combined",
      "Load management & prioritization",
      "Surge protection across panels",
      "Remote monitoring options",
    ],
    popular: true,
  },
  {
    name: "Advanced",
    tagline: "Full property automation",
    bestFor: "Best for estates & commercial sites with complex power setups",
    features: [
      "Complete power source switching automation",
      "Custom control panel design & build",
      "Advanced load management & scheduling",
      "Priority support & maintenance plan",
    ],
  },
];

export const smartHomePricingTiers: ServicePricingTier[] = [
  {
    name: "Essential",
    tagline: "Core smart controls",
    bestFor: "Best for single rooms or apartments getting started",
    features: [
      "Smart lighting & switches",
      "Smart plugs for key appliances",
      "Single-app remote control",
      "Voice assistant integration",
    ],
  },
  {
    name: "Standard",
    tagline: "Whole-home essentials",
    bestFor: "Best for family homes wanting full convenience",
    features: [
      "Whole-home smart lighting & switches",
      "Smart locks & video doorbell",
      "Automated scenes & schedules",
      "Voice assistant + mobile app control",
    ],
    popular: true,
  },
  {
    name: "Advanced",
    tagline: "Full automation & integration",
    bestFor: "Best for estates & properties wanting complete integration",
    features: [
      "Full home automation across all rooms",
      "Security, climate & entertainment integration",
      "Custom automation scenes & routines",
      "Priority support & ongoing maintenance",
    ],
  },
];
