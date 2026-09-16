"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "./ui";

type SlideImage = { src: string; alt: string };

function Slide({ image }: { image: SlideImage }) {
  return (
    <div className="px-3">
      <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-paper/10 sm:h-72 lg:h-80">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}

/** Continuously sliding filmstrip, matching the homepage services carousel. */
function SlidingTrack({
  images,
  visible,
  intervalMs,
}: {
  images: SlideImage[];
  visible: 1 | 2 | 3;
  intervalMs: number;
}) {
  const total = images.length;
  const extended = [...images, ...images.slice(0, visible)];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Keep the filmstrip moving even when there are only as many images as
    // are visible at once (e.g. exactly 3 photos on desktop) — it loops
    // through the same set continuously instead of sitting still.
    if (total <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, total, visible]);

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
        {extended.map((image, i) => (
          <div key={`${image.src}-${i}`} style={{ flex: `0 0 ${step}%` }}>
            <Slide image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ServiceGallery({
  images,
  className = "",
}: {
  images: SlideImage[];
  className?: string;
}) {
  return (
    <section className={`bg-ink py-12 md:py-16 ${className}`}>
      <Container>
        <div className="hidden lg:block">
          <SlidingTrack images={images} visible={3} intervalMs={3200} />
        </div>
        <div className="hidden sm:block lg:hidden">
          <SlidingTrack images={images} visible={2} intervalMs={3200} />
        </div>
        <div className="sm:hidden">
          <SlidingTrack images={images} visible={1} intervalMs={3200} />
        </div>
      </Container>
    </section>
  );
}
