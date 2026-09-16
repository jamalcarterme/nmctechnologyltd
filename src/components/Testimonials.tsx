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
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
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

        <div className="testimonials-slider mt-14 relative">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
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
                <div className="mt-2 flex gap-1 justify-center text-gold">
                  {Array.from({ length: testimonials[current].rating }).map((_, idx) => (
                    <svg key={idx} className="h-4 w-4 fill-gold" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
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
