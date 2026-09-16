import { Lightbulb, MonitorPlay, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui";

const items = [
  {
    title: "Light Automation",
    text: "Scene-based and scheduled lighting control that adjusts to the time of day, occupancy, and mood — all from one app or wall panel.",
    video:
      "https://ritzmansmarthomes.com/wp-content/uploads/2022/01/FIBARO_Home_Automation_System_Your_home_Your_Imagination.gif",
    icon: Lightbulb,
  },
  {
    title: "Media Automation",
    text: "Whole-home audio and entertainment systems that sync TVs, speakers, and streaming devices with a single, simple control experience.",
    video: "https://ritzmansmarthomes.com/wp-content/uploads/2022/03/ezgif.com-gif-maker.gif",
    icon: MonitorPlay,
  },
  {
    title: "Outdoor Automation",
    text: "Automated gates, outdoor lighting, and perimeter monitoring that keep your property secure and accessible, day or night.",
    video: "https://ritzmansmarthomes.com/wp-content/uploads/2022/03/IMG_5287.gif",
    icon: ShieldCheck,
  },
];

export default function AutomationGrid() {
  return (
    <section className="border-t border-paper/10 bg-ink py-20 md:py-24">
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
                  <div className="relative h-48 w-full bg-charcoal">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.video}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold bg-ink/70 text-gold shadow-[0_6px_16px_-4px_rgba(0,0,0,0.5)] backdrop-blur-sm">
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
