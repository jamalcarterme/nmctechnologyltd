/** Smart home package content. Edit prices, wording and photos here. */

export type StarterPackage = {
  name: string;
  price: string;
  image: string;
  items: string[];
};

export type HomePackage = {
  name: string;
  price?: string; // omit for "contact us" packages
  image: string; // remote (Unsplash) photo
  fallbackImage: string; // local photo used if the remote one fails to load
  coverage: string;
  includes?: string;
  note?: string;
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
    name: "Essential Package",
    price: "₦5,400,000 – ₦6,500,000",
    image: u("photo-1502672260266-1c1ef2d93688"),
    fallbackImage: "/images/smart-home-automation.jpg",
    coverage:
      "The Essential Package covers your living area, kitchen, outdoor cameras and master bedroom.",
    includes:
      "Lighting switches, AC and water heater switches, smart hub, Wi-Fi cameras and a smart door lock.",
  },
  {
    name: "Standard Package",
    price: "₦8,300,000 – ₦9,400,000",
    image: u("photo-1616486338812-3dadae4b4ace"),
    fallbackImage: "/images/smart-home-automation.jpg",
    coverage:
      "The Standard Package covers your living area, anteroom, dining room, kitchen, compound, master bedroom and two other bedrooms.",
    includes:
      "Lighting switches, AC switches, water heater switches, smart speakers, smart hub, Wi-Fi cameras, a smart door lock and curtains.",
  },
  {
    name: "Advanced Package",
    price: "₦11,000,000 – ₦13,000,000",
    image: u("photo-1600210492486-724fe5c67fb0"),
    fallbackImage: "/images/smart-home-automation.jpg",
    coverage:
      "The Advanced Package covers your living area, anteroom, dining room, kitchen, compound, master bedroom, upstairs living area and three other bedrooms, with additional control modules and hardware.",
    includes:
      "Lighting switches, AC switches, water heater switches, smart speakers, smart hub, Wi-Fi cameras, a smart door lock and curtains.",
  },
  {
    name: "Premier Package",
    price: "₦14,000,000 upwards",
    image: u("photo-1600607687939-ce8a6c25118c"),
    fallbackImage: "/images/smart-home-automation.jpg",
    coverage:
      "The Premier Package covers your living area, anteroom, dining room, kitchen, compound, master bedroom, upstairs living area and four other bedrooms. It comes with more premium hardware, and the cost depends on your choice of equipment.",
    includes:
      "Lighting switches, AC switches, water heater switches, smart speakers, smart hub, Wi-Fi cameras, a smart door lock, curtains, smart in-ceiling speakers and more.",
  },
  {
    name: "Signature Package",
    image: u("photo-1600585154340-be6161a56a0c"),
    fallbackImage: "/images/smart-home-automation.jpg",
    coverage:
      "The Signature Package covers the entire home and comes with premium hardware. The cost depends on your choice of equipment.",
    note: "To get more information about this package, please contact us.",
  },
];
