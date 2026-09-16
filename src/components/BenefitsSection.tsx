import Link from "next/link";
import Image from "next/image";
import { Container, Reveal } from "./ui";

export default function BenefitsSection() {
  return (
    <section className="border-t border-paper/10 bg-ink py-16 md:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="slide-up">
            <div className="relative h-56 w-full overflow-hidden rounded-2xl sm:h-64 lg:h-72">
              <Image
                src="/images/nmc-logo-office-wall.jpg"
                alt="NMC Technology logo displayed in a modern office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal variant="fade" delay={0.1}>
            <div>
              <h2 className="balance max-w-2xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[32px]">
                Why Choose Smart Home?
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-paper/65">
                Save money on energy bills, enhance security, and increase your home's efficiency and value.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-block text-[15px] font-semibold text-gold hover:text-gold-light transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
