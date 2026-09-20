/** Smart home package content. Edit prices, wording and photos here. */

export type StarterPackage = {
  name: string;
  price: string;
  image: string;
  items: string[];
};

export type HomePackage = {
  number: string;
  name: string;
  tagline: string;
  intro: string;
  includesLead?: string;
  items: string[];
  scenes?: { name: string; text: string }[];
  closing?: { heading: string; paragraphs: string[] };
  ideal: string;
  cta: string;
  image: string; // remote (Unsplash) photo
  fallbackImage: string; // local photo used if the remote one fails to load
};

export const starterPackages: StarterPackage[] = [
  {
    name: "NMC Starter Package 1",
    price: "₦1,000,000",
    image: "/images/cctv-cube-camera-wall.jpg",
    items: [
      "1 Camera",
      "1 Smart door lock",
      "1 Wi-Fi mesh (access point)",
      "1 Smart video doorbell",
      "1 4-inch smart control module",
      "1 Smart switch",
    ],
  },
  {
    name: "NMC Starter Package 2",
    price: "₦1,300,000",
    image: "/images/cctv-cube-camera-studio.jpg",
    items: [
      "2 Cameras",
      "1 Smart door lock",
      "2 Wi-Fi mesh (access points)",
      "1 Smart video doorbell",
      "1 4-inch smart control module",
      "1 Smart switch",
    ],
  },
];

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const homePackages: HomePackage[] = [
  {
    number: "02",
    name: "Smart Comfort",
    tagline: "Everyday Comfort, Smarter",
    intro:
      "Take your home beyond basic automation with intelligent control of your comfort and entertainment systems.",
    includesLead: "Includes everything in Smart Starter, plus:",
    items: [
      "Motorized smart curtains",
      "Smart AC control",
      "Smart TV & entertainment control",
      "Motion sensors",
      "Door/window sensors",
      "Automated lighting scenes",
      "Remote home control",
      "Customized schedules",
    ],
    ideal: "2–3 bedroom homes, apartments and modern residences.",
    cta: "Get a Quote",
    image: u("photo-1502672260266-1c1ef2d93688"),
    fallbackImage: "/images/smart-home-automation.jpg",
  },
  {
    number: "03",
    name: "Smart Security",
    tagline: "Your Home. Smarter. Safer.",
    intro:
      "A connected security solution designed to give you greater visibility and control over your home.",
    includesLead: "Includes:",
    items: [
      "Smart door locks",
      "Video doorbell",
      "CCTV integration",
      "Motion sensors",
      "Door/window sensors",
      "Smart security lighting",
      "Remote monitoring",
      "Automated security routines",
      "Smartphone notifications",
    ],
    ideal: "Homeowners who prioritize security, access control and remote monitoring.",
    cta: "Secure My Home",
    image: u("photo-1616486338812-3dadae4b4ace"),
    fallbackImage: "/images/smart-home-automation.jpg",
  },
  {
    number: "04",
    name: "Smart Luxury",
    tagline: "Luxury Meets Technology",
    intro:
      "A premium automation experience designed for modern homes, duplexes and sophisticated residences.",
    includesLead: "Includes:",
    items: [
      "Whole-home smart lighting",
      "Motorized curtains",
      "Smart AC control",
      "Smart door locks",
      "CCTV integration",
      "Smart TV & entertainment control",
      "Motion & presence sensors",
      "Voice control",
      "Remote access",
      "Customized automation scenes",
    ],
    scenes: [
      {
        name: "Good Morning",
        text: "Open curtains, activate selected lights and prepare your home for the day.",
      },
      {
        name: "Movie Mode",
        text: "Adjust lighting, curtains and entertainment systems with one command.",
      },
      {
        name: "Away Mode",
        text: "Secure doors, switch off selected appliances and activate security settings.",
      },
      {
        name: "Good Night",
        text: "Turn off selected lights, close curtains and activate your preferred security routine.",
      },
    ],
    ideal: "Luxury apartments, duplexes and modern family homes.",
    cta: "Design My Smart Home",
    image: u("photo-1600210492486-724fe5c67fb0"),
    fallbackImage: "/images/smart-home-automation.jpg",
  },
  {
    number: "05",
    name: "NMC Ultimate Smart Home",
    tagline: "The Complete Smart Living Experience",
    intro:
      "Our flagship automation package brings your home\u2019s major systems together into one intelligent ecosystem.",
    includesLead: "Includes:",
    items: [
      "Whole-home lighting automation",
      "Motorized curtains & blinds",
      "Smart locks & access control",
      "CCTV & video doorbell integration",
      "AC & climate automation",
      "Entertainment automation",
      "Motion & presence detection",
      "Energy monitoring",
      "Solar & inverter integration",
      "Generator automation integration",
      "Smart appliance control",
      "Centralized smartphone/tablet control",
      "Voice control",
      "Customized scenes and schedules",
      "Professional installation & configuration",
      "System commissioning and user training",
    ],
    closing: {
      heading: "Built Around Your Lifestyle",
      paragraphs: [
        "We don\u2019t simply install smart devices. We design an automation experience around the way you live.",
        "From arriving home to going to bed, your home can respond intelligently to your routines, preferences and commands.",
      ],
    },
    ideal: "Luxury residences, mansions, premium apartments, executive homes and high-end developments.",
    cta: "Book a Smart Home Consultation",
    image: u("photo-1600607687939-ce8a6c25118c"),
    fallbackImage: "/images/smart-home-automation.jpg",
  },
  {
    number: "06",
    name: "Developers Package",
    tagline: "Smart Homes That Sell Faster",
    intro:
      "A smart-home solution for property developers delivering residential units for sale. We equip the key spaces of each property with intelligent controls and configure the system around your development, so buyers step into a modern, connected home.",
    includesLead: "Designed to cover:",
    items: [
      "Living areas and lounges",
      "Kitchens and dining spaces",
      "Master bedrooms and additional bedrooms",
      "Entrance, corridors and anterooms",
      "Outdoor and compound lighting control",
      "Configuration planned around your unit layouts and development scale",
    ],
    ideal: "Developers and builders of residential properties for sale.",
    cta: "Discuss a Developer Project",
    image: u("photo-1600585154340-be6161a56a0c"),
    fallbackImage: "/images/smart-home-automation.jpg",
  },
];
