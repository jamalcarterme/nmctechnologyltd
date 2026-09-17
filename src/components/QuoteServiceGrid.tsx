import Link from "next/link";
import { ArrowRight, Camera, Sun, Wifi, Zap } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { quoteServices } from "@/lib/quoteServices";

const icons = { Sun, Camera, Zap, Wifi };

/** The "which service do you need" question grid used by /get-quote.
 * Shared so other pages (e.g. /contact) can reuse the exact same
 * questionnaire without duplicating markup. */
export default function QuoteServiceGrid({
  showContactHint = true,
}: {
  showContactHint?: boolean;
}) {
  return (
    <section className="bg-ink py-16 md:py-20">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2">
          {quoteServices.map((service, i) => {
            const Icon = icons[service.icon];
            const animationVariant = i % 2 === 0 ? "pop" : "scale";
            return (
              <Reveal key={service.slug} delay={i * 0.08} variant={animationVariant}>
                <Link
                  href={`/get-quote/${service.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-paper/12 bg-paper/[0.03] p-7 transition-colors hover:border-gold/60"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <h2 className="font-display mt-5 text-[20px] font-semibold text-paper">
                    {service.label}
                  </h2>
                  <p className="mt-2 text-[14px] leading-relaxed text-paper/60">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-gold">
                    Get a quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {showContactHint && (
          <p className="mt-10 text-center text-[14px] text-paper/50">
            Not sure which service fits your needs?{" "}
            <Link href="/contact" className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light">
              Contact us directly
            </Link>{" "}
            and we&apos;ll help you figure it out.
          </p>
        )}
      </Container>
    </section>
  );
}
