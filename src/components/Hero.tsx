"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { site } from "@/lib/data";
import { Container } from "./ui";

const easeOut = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.09, duration: 0.6, ease: easeOut },
  }),
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Setting muted only as a JSX prop doesn't always land before play()
    // is attempted, which makes browsers silently block autoplay.
    // Setting it imperatively guarantees it's true first.
    video.muted = true;
    video.defaultMuted = true;

    // Fade the poster out only once the video actually has a frame ready,
    // so there's never a blank flash — but the video (now ~1MB, faststart)
    // starts almost immediately instead of waiting seconds to buffer.
    const markReady = () => setVideoReady(true);
    video.addEventListener("loadeddata", markReady);
    video.addEventListener("playing", markReady);

    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // Autoplay was blocked (e.g. low-power mode) — poster image stays.
      });
    }

    return () => {
      video.removeEventListener("loadeddata", markReady);
      video.removeEventListener("playing", markReady);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[560px] items-center overflow-hidden bg-ink pb-20 pt-32 sm:min-h-[640px] md:min-h-[720px] md:pb-28 md:pt-40"
    >
      <div className="pointer-events-none absolute inset-0">
        <img
          src="/images/hero-panels.jpg"
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-0" : "opacity-100"
          }`}
        />
        <video
          ref={videoRef}
          src="/background-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* One even, fairly light wash — the video stays the dominant
            visual, just enough contrast for the centered text to read. */}
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <motion.h1
          variants={reveal}
          custom={0}
          initial="hidden"
          animate="show"
          className="balance max-w-3xl text-[34px] font-bold uppercase leading-[1.15] tracking-tight text-paper sm:text-[44px] lg:text-[56px]"
        >
          Smart. Reliable. Professional.
        </motion.h1>

        <motion.p
          variants={reveal}
          custom={1}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-lg text-[16px] leading-relaxed text-paper/80 sm:text-[17px]"
        >
          Innovative electrical, solar, security, and automation solutions designed to make homes, offices, and businesses safer, smarter, and more energy-efficient.
        </motion.p>

        <motion.div
          variants={reveal}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
          >
            Get a Quote
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
          >
            Contact Us
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
