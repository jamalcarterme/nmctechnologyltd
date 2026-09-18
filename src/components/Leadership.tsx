import Image from "next/image";
import { Container, Eyebrow, Reveal } from "./ui";

/** Leadership block: portrait on top, details card underneath (mobile-first,
 * side by side on large screens). Add the CEO's name to `CEO_NAME` to show it
 * above the job title. */
const CEO_NAME = "";

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
              alt="Chief Executive Officer of NMC Technology seated at his desk"
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
              Chief Executive Officer · NMC Technology
            </p>

            <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-paper/70">
              <p>
                The vision behind NMC Technology began in the CEO&apos;s own
                home. Faced with rising insecurity and high electricity and
                diesel costs, he automated his home so that he could control
                lights, air conditioners and other appliances from his phone,
                from anywhere in the world. The result was greater comfort,
                better security and lower energy costs.
              </p>
              <p>
                Seeing the difference it made, he set out to bring the same ease
                and peace of mind to homes and businesses across Nigeria. Today,
                he leads a team of trained in-house technicians who deliver
                solar, CCTV, smart electrical automation and smart home
                solutions, built on quality equipment, professional installation
                and long-term support.
              </p>
            </div>

            <span className="mt-8 block h-1 w-full rounded-full bg-gold" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
