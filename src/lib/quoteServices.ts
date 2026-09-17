export type QuoteService = {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: "Sun" | "Camera" | "Zap" | "Wifi";
  interestLabel: string;
  interestOptions: string[];
  heroImage: string;
};

export const quoteServices: QuoteService[] = [
  {
    slug: "solar",
    label: "Solar Power Installation",
    shortLabel: "Solar",
    description: "Inverter, battery and solar panel systems sized to your property.",
    icon: "Sun",
    interestLabel: "What type of solar system are you interested in?",
    interestOptions: [
      "Off-Grid System",
      "Backup System",
      "Hybrid (Grid + Solar)",
      "Not sure yet",
    ],
    heroImage: "/images/installer-panel-1.jpg",
  },
  {
    slug: "cctv",
    label: "CCTV Camera Installation",
    shortLabel: "CCTV",
    description: "Security cameras, remote monitoring and surveillance systems.",
    icon: "Camera",
    interestLabel: "What are you specifically interested in?",
    interestOptions: [
      "Home Security",
      "Business / Office Security",
      "Remote Monitoring Setup",
      "System Upgrade",
      "Not sure yet",
    ],
    heroImage: "/images/cctv-solar-ptz-camera.jpg",
  },
  {
    slug: "automation",
    label: "Smart Electrical Automation",
    shortLabel: "Smart Electrical",
    description: "ATS, generator automation, load management and surge protection.",
    icon: "Zap",
    interestLabel: "What are you specifically interested in?",
    interestOptions: [
      "ATS / Generator Automation",
      "Load Management",
      "Surge Protection",
      "Full Automation Panel",
      "Not sure yet",
    ],
    heroImage: "/images/breaker-board.jpg",
  },
  {
    slug: "smart-home",
    label: "Smart Home Automation",
    shortLabel: "Smart Home",
    description: "Smart lighting, security, climate and full home automation.",
    icon: "Wifi",
    interestLabel: "What are you specifically interested in?",
    interestOptions: [
      "Smart Lighting & Switches",
      "Smart Security (Locks & Cameras)",
      "Full Home Automation",
      "Voice Assistant Integration",
      "Not sure yet",
    ],
    heroImage: "/images/control-tech.jpg",
  },
];

export function getQuoteService(slug: string) {
  return quoteServices.find((s) => s.slug === slug);
}
