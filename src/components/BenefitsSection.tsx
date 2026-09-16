import Link from "next/link";
import Image from "next/image";
import { Container, Eyebrow, Reveal } from "./ui";

export default function BenefitsSection() {
  return (
    <section className="border-t border-paper/10 bg-ink py-24 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal variant="slide-up">
            <Image
              src="/images/hero-panels.jpg"
              alt="Smart home benefits"
              width={600}
              height={400}
              className="rounded-2xl"
            />
          </Reveal>

          <Reveal variant="fade" delay={0.1}>
            <div>
              <h2 className="balance max-w-2xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[36px]">
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
