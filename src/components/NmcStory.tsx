import { Container, Reveal } from "./ui";

export default function NmcStory() {
  return (
    <section className="border-t border-paper/10 bg-gradient-to-r from-ink to-charcoal py-16 md:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="balance max-w-3xl text-[32px] font-semibold leading-tight text-paper sm:text-[40px]">
            Our Story
          </h2>
        </Reveal>

        <Reveal variant="fade" delay={0.1} className="mx-auto mt-12 max-w-3xl">
          <div className="space-y-6 text-[16px] leading-relaxed text-paper/75">
            <p>
              NMC Technology was born from a passion for engineering,
              innovation, and the desire to create technology solutions that
              genuinely make everyday life better.
            </p>

            <p>
              Founded by Michael Nwachukwu, an Electrical &amp; Solar Engineer
              with a strong passion for technology and quality workmanship, NMC
              Technology started with a simple vision: to turn ideas into
              reliable, practical, and intelligent solutions.
            </p>

            <p>
              What began as a passion for electrical engineering and power
              solutions has grown into a technology-driven company providing
              premium solutions across solar energy, inverter systems, smart
              electrical automation, CCTV security, and smart home automation.
            </p>

            <p>
              At NMC Technology, we believe technology should do more than
              function—it should deliver comfort, efficiency, security,
              reliability, and peace of mind. This philosophy guides every
              project we undertake, from residential installations to complex
              commercial and industrial solutions.
            </p>

            <p>
              Today, NMC Technology continues to grow with a commitment to
              engineering excellence, innovative thinking, professional
              execution, and exceptional customer experience.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center text-center">
            <p className="text-[16px] leading-relaxed text-paper/75">
              Our journey is still unfolding, but our purpose remains clear:
            </p>
            <p className="font-display mt-4 text-[26px] font-semibold leading-tight text-gold sm:text-[32px]">
              Turning Ideas into Reality.
            </p>
            <span className="mt-6 block h-1 w-16 rounded-full bg-gold" />
            <p className="mt-6 max-w-xl text-[17px] font-medium leading-relaxed text-paper">
              We are building more than systems. We are building solutions
              people can trust.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
