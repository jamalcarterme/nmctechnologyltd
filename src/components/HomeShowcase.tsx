"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { Container, Eyebrow } from "./ui";
import SlidingCarousel from "./SlidingCarousel";

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

export default function HomeShowcase() {
  return (
    <section className="border-t border-paper/10 bg-ink py-16 md:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <Eyebrow>Our services</Eyebrow>
          <h2 className="balance mt-4 max-w-2xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[32px]">
            Complete Solutions
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-paper/65">
            From solar power to smart home automation, we deliver complete integrated solutions.
          </p>
        </motion.div>

        {/* Desktop / tablet: two cards visible, sliding filmstrip */}
        <div className="mt-14 hidden sm:block">
          <SlidingCarousel
            items={services}
            visible={2}
            intervalMs={3000}
            keyExtractor={(service, i) => `${service.title}-${i}`}
            renderItem={(service) => <Card service={service} />}
            showDots
            showArrows
          />
        </div>

        {/* Mobile: one card visible, sliding filmstrip, same fast cadence */}
        <div className="mt-12 sm:hidden">
          <SlidingCarousel
            items={services}
            visible={1}
            intervalMs={3000}
            keyExtractor={(service, i) => `${service.title}-${i}`}
            renderItem={(service) => <Card service={service} />}
            showDots
            showArrows
          />
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
