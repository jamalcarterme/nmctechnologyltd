"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container, Eyebrow } from "./ui";

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

/** Continuously sliding filmstrip, mirroring the homepage services carousel. */
function SlidingTrack({
  visible,
  intervalMs,
}: {
  visible: 1 | 2 | 3;
  intervalMs: number;
}) {
  const total = photos.length;
  const extended = [...photos, ...photos.slice(0, visible)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  useEffect(() => {
    if (index === total) {
      timeoutRef.current = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 650);
    } else if (!animate) {
      const raf = requestAnimationFrame(() => setAnimate(true));
      return () => cancelAnimationFrame(raf);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const step = 100 / visible;

  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          transform: `translateX(-${index * step}%)`,
          transition: animate ? "transform 650ms cubic-bezier(0.22,1,0.36,1)" : "none",
        }}
      >
        {extended.map((photo, i) => (
          <div key={`${photo.src}-${i}`} style={{ flex: `0 0 ${step}%` }}>
            <Slide photo={photo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [dot, setDot] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDot((i) => (i + 1) % photos.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

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
          <SlidingTrack visible={3} intervalMs={3200} />
        </div>

        {/* Tablet: two photos visible */}
        <div className="mt-12 hidden sm:block lg:hidden">
          <SlidingTrack visible={2} intervalMs={3200} />
        </div>

        {/* Mobile: one photo visible */}
        <div className="mt-10 sm:hidden">
          <SlidingTrack visible={1} intervalMs={3200} />
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {photos.map((photo, i) => (
            <span
              key={photo.src}
              aria-hidden="true"
              className={`h-2 rounded-full transition-all ${
                i === dot ? "w-6 bg-gold" : "w-2 bg-paper/25"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
