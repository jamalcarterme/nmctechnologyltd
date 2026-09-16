"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/** Full-bleed crossfading image slider, meant to sit behind hero content.
 * Renders every image stacked absolutely and fades between them. */
export default function BackgroundSlider({
  images,
  intervalMs = 4500,
}: {
  images: { src: string; alt: string }[];
  intervalMs?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="pointer-events-none absolute inset-0">
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
