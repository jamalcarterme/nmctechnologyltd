import Link from "next/link";
import { Lightbulb, MonitorPlay, ShieldCheck } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui";

const items = [
  {
    title: "Light Automation",
    text: "Tap a scene on your phone and every light in the room responds instantly — dimmed, brightened, or switched off together on one schedule.",
    video: "/videos/light-automation.mp4",
    icon: Lightbulb,
    href: "/services/smart-home",
  },
  {
    title: "Media Automation",
    text: "TVs, speakers, and streaming devices wired into one system, so your entire entertainment setup turns on and adjusts together, on command.",
    video: "/videos/media-automation.mp4",
    icon: MonitorPlay,
    href: "/services/smart-home",
  },
  {
    title: "Outdoor Automation",
    text: "Live camera feeds, gate access, and outdoor lighting monitored and controlled remotely, so your property stays secure day and night.",
    video: "/videos/outdoor-automation.mp4",
    icon: ShieldCheck,
    href: "/services/cctv",
  },
];

export default function AutomationGrid() {
  return (
    <section className="border-t border-paper/10 bg-ink py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Intelligent Automation</Eyebrow>
          <h2 className="balance mt-4 max-w-xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[32px]">
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
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-2xl border border-paper/10 bg-paper/[0.03] transition-colors hover:border-gold/40 cursor-pointer"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-charcoal">
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
