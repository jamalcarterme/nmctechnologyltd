import Image from "next/image";
import { Container, Eyebrow, Reveal } from "./ui";

/** Leadership block: portrait on top, details card underneath (mobile-first,
 * side by side on large screens). */
const CEO_NAME = "Engr. Michael Nwachukwu";
const CEO_TITLE = "Founder & CEO, NMC Technology";

export default function Leadership() {
  return (
    <section className="border-t border-paper/10 bg-charcoal py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Meet Our CEO
          </h2>
        </Reveal>

        <Reveal
          variant="fade"
          delay={0.1}
          className="mx-auto mt-12 grid max-w-5xl overflow-hidden rounded-3xl border border-paper/10 bg-ink lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
        >
          <div className="relative aspect-[3/4] w-full lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="/images/ceo-portrait.jpg"
              alt="Engr. Michael Nwachukwu, Founder and CEO of NMC Technology, seated at his desk"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>

          <div className="relative flex flex-col justify-center p-7 sm:p-10">
            {CEO_NAME && (
              <h3 className="font-display text-[24px] font-semibold text-paper">
                {CEO_NAME}
              </h3>
            )}
            <p
              className={`text-[13px] font-semibold uppercase tracking-[0.18em] text-gold ${
                CEO_NAME ? "mt-2" : ""
              }`}
            >
              {CEO_TITLE}
            </p>

            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-paper/70">
              <p>
                Michael Nwachukwu is a visionary Electrical &amp; Solar Engineer
                and the Founder and CEO of NMC Technology, a premium technology
                and engineering company focused on delivering innovative,
                reliable, and intelligent solutions for modern homes,
                businesses, and commercial facilities.
              </p>
              <p>
                With a strong passion for engineering excellence and smart
                technology, Michael has built NMC Technology around the
                principles of quality, precision, innovation, and customer
                satisfaction. His expertise spans solar energy systems, power
                solutions, smart electrical automation, CCTV security systems,
                and smart home technologies.
              </p>
              <p>
                As CEO, Michael combines technical expertise with strategic
                leadership to ensure every project meets the highest standards
                of professionalism, performance, safety, and aesthetics.
              </p>
              <p>
                His vision is simple: to build a trusted technology brand that
                transforms ideas into practical solutions and sets a new
                standard for engineering excellence.
              </p>
            </div>

            <span className="mt-8 block h-1 w-full rounded-full bg-gold" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
