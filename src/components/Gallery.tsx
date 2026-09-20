"use client";

import Image from "next/image";
import { Container, Eyebrow } from "./ui";
import SlidingCarousel from "./SlidingCarousel";

const photos = [
  {
    src: "/images/projects/project-24.jpeg",
    alt: "70 units of 650w solar panels installed at Ikoyi Lagos",
    caption: "70 units of 650w solar panels installed at Ikoyi Lagos",
  },
  {
    src: "/images/projects/project-29.jpeg",
    alt: "Solar camera",
    caption: "Solar camera",
  },
  {
    src: "/images/projects/project-25.jpeg",
    alt: "Smart electrical installation",
    caption: "Smart electrical installation",
  },
  {
    src: "/images/projects/project-31.jpeg",
    alt: "Smart curtains automation",
    caption: "Smart curtains automation",
  },
  {
    src: "/images/projects/project-02.jpeg",
    alt: "Smart load distribution system",
    caption: "Smart load distribution system",
  },
  {
    src: "/images/projects/project-08.jpeg",
    alt: "Solar panels installation",
    caption: "Solar panels installation",
  },
  {
    src: "/images/projects/project-28.jpeg",
    alt: "Smart staircase lighting",
    caption: "Smart staircase lighting",
  },
  {
    src: "/images/projects/project-33.jpeg",
    alt: "Dynamic lighting control panel",
    caption: "Dynamic lighting control panel",
  },
  {
    src: "/images/projects/project-34.jpeg",
    alt: "AVR installation",
    caption: "AVR installation",
  },
  {
    src: "/images/projects/project-03.jpeg",
    alt: "Inverter Automation",
    caption: "Inverter Automation",
  },
  {
    src: "/images/projects/project-04.jpeg",
    alt: "Smart generator trigger switch",
    caption: "Smart generator trigger switch",
  },
  {
    src: "/images/projects/project-05.jpeg",
    alt: "Smartload distribution control",
    caption: "Smartload distribution control",
  },
  {
    src: "/images/projects/project-06.jpeg",
    alt: "Generator Automation",
    caption: "Generator Automation",
  },
  {
    src: "/images/projects/project-07.jpeg",
    alt: "Solar panels installation",
    caption: "Solar panels installation",
  },
  {
    src: "/images/projects/project-09.jpeg",
    alt: "Preventive maintenance",
    caption: "Preventive maintenance",
  },
  {
    src: "/images/projects/project-10.jpeg",
    alt: "6kva inverter system",
    caption: "6kva inverter system",
  },
  {
    src: "/images/projects/project-11.jpeg",
    alt: "12kva with 35kwh lithium battery",
    caption: "12kva with 35kwh lithium battery",
  },
  {
    src: "/images/projects/project-12.jpeg",
    alt: "32kva inverter with 50kwh lithium 40 unit of 650w solar panel",
    caption: "32kva inverter with 50kwh lithium 40 unit of 650w solar panel",
  },
  {
    src: "/images/projects/project-13.jpeg",
    alt: "18kva with 50kwh lithium battery 30 units of 650w solar panels",
    caption: "18kva with 50kwh lithium battery 30 units of 650w solar panels",
  },
  {
    src: "/images/projects/project-14.jpeg",
    alt: "ATS",
    caption: "ATS",
  },
  {
    src: "/images/projects/project-15.jpeg",
    alt: "12kva with 25kwh lithium battery 20 units of 650w solar panels",
    caption: "12kva with 25kwh lithium battery 20 units of 650w solar panels",
  },
  {
    src: "/images/projects/project-16.jpeg",
    alt: "30kva with 100kwh lithium batteries 76 units of 650w solar panels",
    caption: "30kva with 100kwh lithium batteries 76 units of 650w solar panels",
  },
  {
    src: "/images/projects/project-17.jpeg",
    alt: "Control panel",
    caption: "Control panel",
  },
  {
    src: "/images/projects/project-18.jpeg",
    alt: "Generator Automation",
    caption: "Generator Automation",
  },
  {
    src: "/images/projects/project-19.jpeg",
    alt: "Installation of 12kva inverter system",
    caption: "Installation of 12kva inverter system",
  },
  {
    src: "/images/projects/project-20.jpeg",
    alt: "Installation of AVR",
    caption: "Installation of AVR",
  },
  {
    src: "/images/projects/project-21.jpeg",
    alt: "Panel installation",
    caption: "Panel installation",
  },
  {
    src: "/images/projects/project-22.jpeg",
    alt: "Automatic change over",
    caption: "Automatic change over",
  },
  {
    src: "/images/projects/project-23.jpeg",
    alt: "Corrective maintenance",
    caption: "Corrective maintenance",
  },
  {
    src: "/images/projects/project-26.jpeg",
    alt: "30kva with 65kwh lithium battery",
    caption: "30kva with 65kwh lithium battery",
  },
  {
    src: "/images/projects/project-27.jpeg",
    alt: "76 units of 550w solar panels installed at banana island Lagos",
    caption: "76 units of 550w solar panels installed at banana island Lagos",
  },
  {
    src: "/images/projects/project-30.jpeg",
    alt: "Smart Gate Automation",
    caption: "Smart Gate Automation",
  },
  {
    src: "/images/projects/project-32.jpeg",
    alt: "Dynamic lighting",
    caption: "Dynamic lighting",
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
        <p className="absolute bottom-4 left-5 right-5 text-[14px] font-semibold uppercase leading-snug tracking-wide text-paper">
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
            intervalMs={2500}
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
            intervalMs={2500}
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
            intervalMs={2500}
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
