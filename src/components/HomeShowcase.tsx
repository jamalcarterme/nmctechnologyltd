"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/data";
import { Container, Eyebrow } from "./ui";

export default function HomeShowcase() {
  const total = services.length;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4200);
    return () => clearInterval(id);
  }, [total]);

  const a = services[index];
  const b = services[(index + 1) % total];

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

        {/* Desktop / tablet: two cards visible, sliding one at a time */}
        <div className="mt-14 hidden sm:block">
          <div className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="grid gap-8 sm:grid-cols-2"
              >
                {[a, b].map((service) => (
                  <div key={service.title}>
                    <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-paper/10 sm:h-72">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-display mt-6 text-[20px] font-semibold text-paper">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-paper/65">
                      {service.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: single card, fast auto-advancing grid */}
        <div className="mt-12 sm:hidden">
          <div className="min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-paper/10">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-display mt-5 text-[19px] font-semibold text-paper">
                  {a.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-paper/65">
                  {a.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {services.map((service, i) => (
            <button
              key={service.title}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-gold" : "w-2 bg-paper/25 hover:bg-paper/40"
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
