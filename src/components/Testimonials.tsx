"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Container, Reveal } from "./ui";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-gold py-24 md:py-28">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="font-display text-[32px] font-semibold text-ink sm:text-[38px]">
            Testimonials
          </h2>
        </Reveal>

        <div className="mt-14 relative h-80 md:h-64">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4"
            >
              <div className="mx-auto max-w-2xl bg-white rounded-xl p-8 md:p-10 text-center">
                <p className="text-[16px] md:text-[17px] leading-relaxed text-ink">
                  {testimonials[current].text}
                </p>
                <p className="mt-6 font-semibold text-ink">
                  {testimonials[current].name}
                </p>
                <p className="text-[14px] text-ink/60">
                  {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-6 bg-ink/60" : "w-2 bg-ink/25"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
