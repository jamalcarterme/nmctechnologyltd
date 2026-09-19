"use client";

import Image from "next/image";
import { Container, Eyebrow } from "./ui";
import SlidingCarousel from "./SlidingCarousel";

const photos = [
  {
    src: "/images/hero-panels.jpg",
    alt: "Rooftop solar panel array overlooking the city skyline",
    caption: "Rooftop solar array",
  },
  {
    src: "/images/inverter-room-deye-1.jpg",
    alt: "Deye hybrid inverters and battery bank installed in a plant room",
    caption: "Deye hybrid inverter room",
  },
  {
    src: "/images/installer-panel-1.jpg",
    alt: "NMC Technology technician installing a rooftop solar panel",
    caption: "On-site panel installation",
  },
  {
    src: "/images/inverter-room-growatt.jpg",
    alt: "Growatt inverter bank with distribution board wiring",
    caption: "Growatt inverter bank",
  },
  {
    src: "/images/panelboard-tech.jpg",
    alt: "Technician wiring a solar distribution and breaker panel",
    caption: "Distribution panel wiring",
  },
  {
    src: "/images/rooftop-panels-3.jpg",
    alt: "Solar panel installation on a commercial rooftop",
    caption: "Commercial rooftop installation",
  },
  {
    src: "/images/solar-install-technician.jpg",
    alt: "NMC Technology technician installing a solar panel",
    caption: "NMC technician at work",
  },
  {
    src: "/images/solar-inverters-growatt.jpg",
    alt: "Growatt solar inverters mounted and wired",
    caption: "Mounted inverter installation",
  },
  {
    src: "/images/avr-voltage-regulator.jpg",
    alt: "Technician servicing a 30000VA automatic voltage regulator",
    caption: "AVR installation & servicing",
  },
  {
    src: "/images/inverter-room-deye-3.jpg",
    alt: "Two Deye hybrid inverters mounted above distribution boards",
    caption: "Deye hybrid inverter room",
  },
  {
    src: "/images/inverter-room-deye-4.jpg",
    alt: "Deye inverters and battery bank installed in a plant room",
    caption: "Inverter & battery bank setup",
  },
  {
    src: "/images/inverter-room-deye-closeup.jpg",
    alt: "Close-up of Deye hybrid inverter control panels and battery boxes",
    caption: "Deye inverter close-up",
  },
  {
    src: "/images/srne-battery-tower-technician.jpg",
    alt: "NMC Technology technician beside a stacked SRNE lithium battery tower",
    caption: "SRNE lithium battery tower",
  },
  {
    src: "/images/srne-showroom-wall.jpg",
    alt: "Showroom wall of SRNE inverters and battery storage units",
    caption: "SRNE equipment showroom",
  },
  {
    src: "/images/solar-rooftop-technician-nmc.jpg",
    alt: "NMC Technology technician installing a rooftop solar panel",
    caption: "NMC technician on-site",
  },
  {
    src: "/images/inverter-install-technician.jpg",
    alt: "Technician wiring Deye hybrid inverters during installation",
    caption: "Inverter installation",
  },
  {
    src: "/images/automation-breaker-panel.jpg",
    alt: "Automatic transfer switch panel being installed and wired",
    caption: "ATS panel installation",
  },
  {
    src: "/images/automation-panel-wiring.jpg",
    alt: "Technician wiring an electrical automation control panel",
    caption: "Automation panel wiring",
  },
  {
    src: "/images/automation-control-panel-field.jpg",
    alt: "Technician servicing an industrial electrical control panel on-site",
    caption: "Field control panel service",
  },
];

function Slide({ photo }: { photo: (typeof photos)[number] }) {
  return (
    <div className="px-3">
      <div className="group relative h-64 w-full overflow-hidden rounded-2xl border border-paper/10 sm:h-72 lg:h-80">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
        <p className="absolute bottom-4 left-5 text-[14px] font-semibold uppercase tracking-wide text-paper">
          {photo.caption}
        </p>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="projects" className="bg-ink py-16 md:py-20">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Recent projects</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Real installations, by our own technicians
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
            A look at homes and facilities we&apos;ve powered —
            from rooftop arrays to the plant rooms that keep them running.
          </p>
        </div>

        {/* Desktop: three photos visible, sliding filmstrip */}
        <div className="mt-14 hidden lg:block">
          <SlidingCarousel
            items={photos}
            visible={3}
            intervalMs={3200}
            keyExtractor={(photo, i) => `${photo.src}-${i}`}
            renderItem={(photo) => <Slide photo={photo} />}
            showDots
            showArrows
          />
        </div>

        {/* Tablet: two photos visible */}
        <div className="mt-12 hidden sm:block lg:hidden">
          <SlidingCarousel
            items={photos}
            visible={2}
            intervalMs={3200}
            keyExtractor={(photo, i) => `${photo.src}-${i}`}
            renderItem={(photo) => <Slide photo={photo} />}
            showDots
            showArrows
          />
        </div>

        {/* Mobile: one photo visible */}
        <div className="mt-10 sm:hidden">
          <SlidingCarousel
            items={photos}
            visible={1}
            intervalMs={3200}
            keyExtractor={(photo, i) => `${photo.src}-${i}`}
            renderItem={(photo) => <Slide photo={photo} />}
            showDots
            showArrows
          />
        </div>
      </Container>
    </section>
  );
}
