"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Container, Eyebrow } from "./ui";

type Slide = (typeof services)[number];

function Card({ service }: { service: Slide }) {
  return (
    <Link
      href={service.href || "/services"}
      className="px-3 block group cursor-pointer transition-all hover:opacity-80"
    >
      <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-paper/10 sm:h-72 group-hover:border-gold/50 transition-colors">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-display mt-6 text-[20px] font-semibold text-paper group-hover:text-gold transition-colors">
        {service.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-paper/65">
        {service.description}
      </p>
    </Link>
  );
}

/** A continuously sliding filmstrip carousel. Shows `visible` cards at a
 * time and shifts left by one card every `intervalMs`, looping seamlessly. */
function SlidingTrack({
  visible,
  intervalMs,
}: {
  visible: 1 | 2;
  intervalMs: number;
}) {
  const total = services.length;
  const extended = [...services, ...services.slice(0, visible)];
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
      // Landed on the cloned card(s) — after the slide finishes, snap
      // back to the real first card with no transition, then restore it.
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
        {extended.map((service, i) => (
          <div key={`${service.title}-${i}`} style={{ flex: `0 0 ${step}%` }}>
            <Card service={service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeShowcase() {
  const [dot, setDot] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setDot((i) => (i + 1) % services.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-t border-paper/10 bg-ink py-24 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <Eyebrow>What we do</Eyebrow>
          <h2 className="balance mt-4 max-w-2xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[36px]">
            Manage Everything
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-paper/65">
            The technology we install lets you micromanage power, security, and comfort across your entire property from anywhere in the world.
          </p>
        </motion.div>

        {/* Desktop / tablet: two cards visible, sliding filmstrip */}
        <div className="mt-14 hidden sm:block">
          <SlidingTrack visible={2} intervalMs={3000} />
        </div>

        {/* Mobile: one card visible, sliding filmstrip, same fast cadence */}
        <div className="mt-12 sm:hidden">
          <SlidingTrack visible={1} intervalMs={3000} />
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {services.map((service, i) => (
            <span
              key={service.title}
              aria-hidden="true"
              className={`h-2 rounded-full transition-all ${
                i === dot ? "w-6 bg-gold" : "w-2 bg-paper/25"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
          >
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
