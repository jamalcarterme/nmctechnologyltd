import Image from "next/image";
import { ClipboardCheck, Wrench, Zap } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui";

const items = [
  {
    title: "Smart Electrical Automation",
    text: "Transform conventional systems into intelligent, efficient electrical solutions with automated controls and protection.",
    image: "/images/panelboard-tech.jpg",
    icon: Zap,
  },
  {
    title: "Custom Solutions",
    text: "Integrated technology solutions tailored to your specific needs, budget, and space requirements.",
    image: "/images/breaker-board.jpg",
    icon: Wrench,
  },
  {
    title: "Professional Support",
    text: "Expert consultation, system assessment, maintenance, troubleshooting, and technical support after installation.",
    image: "/images/control-tech.jpg",
    icon: ClipboardCheck,
  },
];

export default function AutomationGrid() {
  return (
    <section className="border-t border-paper/10 bg-ink py-24 md:py-28">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="balance mt-4 max-w-xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[36px]">
            Automation That Works For You
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {items.map((item, i) => {
            // Cycle through different animations for each item
            const variants = ["scale", "slide-up", "pop"];
            const animationVariant = variants[i % variants.length] as "scale" | "slide-up" | "pop";
            return (
              <Reveal key={item.title} delay={i * 0.1} variant={animationVariant}>
                <div className="overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.03]">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-gold text-ink shadow-[0_6px_16px_-4px_rgba(0,0,0,0.5)]">
                      <item.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-display text-[13px] font-semibold uppercase tracking-wide text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-paper/65">
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
