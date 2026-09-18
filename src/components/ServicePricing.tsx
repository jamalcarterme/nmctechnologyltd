"use client";

import { Check } from "lucide-react";
import { waLink } from "@/lib/data";
import { Container, Eyebrow, Reveal } from "./ui";

export type ServicePricingTier = {
  name: string;
  tagline: string;
  bestFor: string;
  features: string[];
  popular?: boolean;
};

export default function ServicePricing({
  id,
  eyebrow,
  title,
  description,
  tiers,
  waIntro,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  tiers: ServicePricingTier[];
  waIntro: string;
}) {
  return (
    <section id={id} className="scroll-mt-24 bg-ink py-16 md:py-20">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            {title}
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/60">{description}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => {
            const animationVariant = i % 3 === 0 ? "scale" : i % 3 === 1 ? "pop" : "slide-up";
            return (
              <Reveal
                key={tier.name}
                delay={i * 0.1}
                variant={animationVariant}
                className={`relative flex flex-col rounded-2xl border p-7 ${
                  tier.popular
                    ? "border-gold bg-gradient-to-b from-gold/[0.08] to-transparent"
                    : "border-paper/12 bg-paper/[0.03]"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                    Most chosen
                  </span>
                )}
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  {tier.name}
                </p>
                <p className="font-display mt-3 text-[22px] font-semibold text-paper">
                  {tier.tagline}
                </p>
                <p className="mt-2 text-[14px] text-paper/60">{tier.bestFor}</p>

                <ul className="mt-6 flex flex-col gap-3 text-[14px] text-paper/70">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`${waIntro} I'm interested in the ${tier.name} tier. Please share pricing and next steps.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-[14px] font-semibold transition-colors ${
                    tier.popular
                      ? "bg-gold text-ink hover:bg-gold-light"
                      : "border border-paper/20 text-paper hover:border-paper/45"
                  }`}
                >
                  Get a quote
                </a>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[13px] text-paper/40">
          Final pricing depends on property size, coverage area and equipment chosen. Your final quote is confirmed before installation.
        </p>

        <p className="mt-6 text-center text-[15px] text-paper/70">
          Not sure which tier fits your property?{" "}
          <a
            href={waLink(`${waIntro} Can you help me figure out which tier is right for my property?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </Container>
    </section>
  );
}
