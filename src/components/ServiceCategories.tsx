import Link from "next/link";
import { Camera, Sun, Wifi, Zap, type LucideIcon } from "lucide-react";
import { serviceCategories } from "@/lib/data";
import BackgroundVideo from "./BackgroundVideo";
import { Container, Eyebrow, Reveal } from "./ui";

const icons: Record<string, LucideIcon> = { Sun, Camera, Zap, Wifi };

export default function ServiceCategories() {
  return (
    <section className="relative overflow-hidden border-t border-paper/10 bg-charcoal py-16 md:py-20">
      <BackgroundVideo src="/background-video.mp4" fallbackImage="/images/team-photo.jpg" />
      <div className="absolute inset-0 bg-charcoal/80" />
      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>What we offer</Eyebrow>
          <h2 className="mt-3 font-display text-[22px] font-semibold text-paper sm:text-[26px]">
            Our Services
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {serviceCategories.map((item, i) => {
            const Icon = icons[item.icon];
            // Alternate between pop and slide-up animations
            const animationVariant = i % 2 === 0 ? "pop" : "slide-up";
            return (
              <Reveal key={item.label} delay={i * 0.08} variant={animationVariant}>
                <Link
                  href={item.href || "#"}
                  className="group flex flex-col items-center text-center transition-all hover:scale-105"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:border-gold/60 group-hover:bg-gold/20">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <p className="mt-3 text-[14px] font-semibold leading-snug text-paper/85 transition-colors group-hover:text-gold">
                    {item.label}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
