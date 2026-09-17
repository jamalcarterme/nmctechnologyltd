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
    
    video.muted = true;
    video.defaultMuted = true;

    const startAt = 7; // begin playback 7s into the clip

    const seekToStart = () => {
      if (video.currentTime < startAt) {
        try {
          video.currentTime = startAt;
        } catch {
          // ignore — some browsers throw until enough data is buffered
        }
      }
    };

    const markReady = () => setVideoReady(true);
    
    const attemptPlay = async () => {
      seekToStart();
      try {
        await video.play();
        markReady();
      } catch (err) {
        // Autoplay was prevented, will play on first user interaction
        console.log("Autoplay failed, waiting for user interaction");
      }
    };

    // Wait until video can be played before attempting to play
    const handleLoadedMetadata = () => seekToStart();

    const handleCanPlay = () => {
      attemptPlay();
    };

    const handleLoadedData = () => {
      markReady();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("playing", markReady);

    // If video is already cached, try to play
    if (video.readyState >= 2) {
      attemptPlay();
    }

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("playing", markReady);
    };
  }, []);

  return (
    <section 
      id="top" 
      className="relative flex min-h-[440px] items-center overflow-hidden bg-ink pb-12 pt-24 sm:min-h-[480px] md:min-h-[520px] md:pb-16 md:pt-28"
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
          src="/background-video-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* One even, fairly light wash — the video stays the dominant
            visual, just enough contrast for the centered text to read. */}
        <div className="absolute inset-0 bg-ink/30" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <motion.p
          variants={reveal}
          custom={0}
          initial="hidden"
          animate="show"
          className="text-[13px] font-semibold uppercase tracking-widest text-gold"
        >
          NMC Technology
        </motion.p>

        <motion.h1
          variants={reveal}
          custom={1}
          initial="hidden"
          animate="show"
          className="max-w-full mt-3 whitespace-nowrap text-[clamp(19px,5.8vw,22px)] font-bold uppercase leading-[1.15] tracking-[0.01em] text-paper sm:text-[40px] lg:text-[48px]"
        >
          Turning Ideas Into Reality
        </motion.h1>

        <motion.p
          variants={reveal}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-4 text-[12px] font-semibold uppercase tracking-widest text-paper/60"
        >
          Smart. Reliable. Professional.
        </motion.p>

        <motion.p
          variants={reveal}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-lg text-[16px] leading-relaxed text-paper/80 sm:text-[17px]"
        >
          We provide innovative electrical, solar, security, and automation solutions designed to make homes, offices, and businesses safer, smarter, and more energy-efficient.
        </motion.p>

        <motion.div
          variants={reveal}
          custom={4}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="/get-quote"
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
