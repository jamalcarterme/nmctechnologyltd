"use client";

import Image from "next/image";
import { Container } from "./ui";
import SlidingCarousel from "./SlidingCarousel";

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

export default function ServiceGallery({
  images,
  className = "",
}: {
  images: SlideImage[];
  className?: string;
}) {
  const keyExtractor = (image: SlideImage, i: number) => `${image.src}-${i}`;
  const renderItem = (image: SlideImage) => <Slide image={image} />;

  return (
    <section className={`bg-ink py-12 md:py-16 ${className}`}>
      <Container>
        <div className="hidden lg:block">
          <SlidingCarousel
            items={images}
            visible={3}
            intervalMs={3200}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showArrows
          />
        </div>
        <div className="hidden sm:block lg:hidden">
          <SlidingCarousel
            items={images}
            visible={2}
            intervalMs={3200}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showArrows
          />
        </div>
        <div className="sm:hidden">
          <SlidingCarousel
            items={images}
            visible={1}
            intervalMs={3200}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            showArrows
          />
        </div>
      </Container>
    </section>
  );
}
