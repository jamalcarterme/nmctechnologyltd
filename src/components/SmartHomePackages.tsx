"use client";

import { useState } from "react";
import Image from "next/image";
import { waLink } from "@/lib/data";
import { homePackages, starterPackages, type HomePackage } from "@/lib/smartHomePackages";
import { Container, Eyebrow, Reveal } from "./ui";

const WA_INTRO = "Hi NMC Technology, I'm interested in a Smart Home Automation package.";

function GetStarted({ name, label }: { name: string; label?: string }) {
  return (
    <a
      href={waLink(`${WA_INTRO} I'm interested in the ${name}. Please share next steps.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
    >
      {label ?? "Get Started"}
    </a>
  );
}

/** Remote photo that quietly falls back to a local image if it can't load. */
function PackagePhoto({ pkg }: { pkg: HomePackage }) {
  const [failed, setFailed] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={failed ? pkg.fallbackImage : pkg.image}
      alt={`${pkg.name} – NMC Technology smart home`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-full w-full ${failed && pkg.fit === "contain" ? "bg-white object-contain p-6" : "object-cover"}`}
    />
  );
}

export default function SmartHomePackages({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 bg-ink py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Smart Home Automation</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Intelligent Living. Seamless Control. Elevated Comfort.
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/60">
            Transform your home into an intelligent, connected environment with NMC Technology
            Smart Home Automation. From lighting and curtains to security, climate control and
            entertainment, we design and install smart systems tailored to your lifestyle.
          </p>
          <p className="mt-3 text-[16px] leading-relaxed text-paper/60">
            Choose your level of smart living — from essential automation to complete luxury home
            integration.
          </p>
        </div>

        <h3 className="font-display mt-12 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
          Starter packages
        </h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {starterPackages.map((pkg, i) => (
            <Reveal
              key={pkg.name}
              delay={i * 0.1}
              variant="scale"
              className="flex flex-col rounded-2xl border border-paper/12 bg-paper/[0.03] p-4"
            >
              <div className="relative h-64 w-full overflow-hidden rounded-xl bg-charcoal">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                <h4 className="font-display text-[20px] font-semibold text-paper">
                  {pkg.name} <span className="text-gold">({pkg.price})</span>
                </h4>
                <ul className="mt-5 flex flex-col gap-2.5 text-[15px] text-paper/75">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <GetStarted name={pkg.name} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <h3 className="font-display mt-16 text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
          Smart home packages
        </h3>
        <div className="mt-5 flex flex-col gap-8">
          {homePackages.map((pkg, i) => (
            <Reveal
              key={pkg.name}
              variant="slide-up"
              className="grid overflow-hidden rounded-2xl border border-paper/12 bg-paper/[0.03] lg:grid-cols-2"
            >
              <div className={`h-64 w-full overflow-hidden sm:h-80 lg:h-full lg:min-h-[340px] ${i % 2 ? "lg:order-2" : ""}`}>
                <PackagePhoto pkg={pkg} />
              </div>
              <div className="flex flex-col justify-center p-7 sm:p-9">
                <p className="font-display text-[13px] font-semibold uppercase tracking-[0.18em] text-gold">
                  {pkg.number} — {pkg.name}
                </p>
                <h4 className="font-display mt-2 text-[22px] font-semibold text-paper">
                  {pkg.tagline}
                </h4>
                <p className="mt-4 text-[15px] leading-relaxed text-paper/70">{pkg.intro}</p>
                {pkg.includesLead && (
                  <p className="mt-5 text-[15px] font-semibold text-paper">{pkg.includesLead}</p>
                )}
                <ul className="mt-3 flex flex-col gap-2.5 text-[15px] text-paper/75">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                {pkg.scenes && (
                  <>
                    <p className="mt-6 text-[15px] font-semibold text-paper">Signature Scenes</p>
                    <ul className="mt-3 flex flex-col gap-2.5 text-[15px] text-paper/75">
                      {pkg.scenes.map((scene) => (
                        <li key={scene.name}>
                          <span className="font-semibold text-gold">{scene.name}</span> — {scene.text}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {pkg.closing && (
                  <>
                    <p className="mt-6 text-[15px] font-semibold text-paper">{pkg.closing.heading}</p>
                    {pkg.closing.paragraphs.map((para) => (
                      <p key={para} className="mt-2 text-[15px] leading-relaxed text-paper/70">
                        {para}
                      </p>
                    ))}
                  </>
                )}
                <p className="mt-6 text-[15px] leading-relaxed text-paper/70">
                  <span className="font-semibold text-paper">Ideal for:</span> {pkg.ideal}
                </p>
                <div>
                  <GetStarted name={`${pkg.name} (${pkg.number})`} label={pkg.cta} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-[15px] text-paper/70">
          Not sure which package fits your property?{" "}
          <a
            href={waLink(`${WA_INTRO} Can you help me figure out which package is right for my property?`)}
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

const whyNmc = [
  { title: "Professional Engineering", text: "Our systems are carefully designed and professionally installed for reliable everyday operation." },
  { title: "Customized Solutions", text: "Every home is different. We tailor your automation system to your space, lifestyle and budget." },
  { title: "Seamless Integration", text: "Lighting, security, curtains, climate control, entertainment and energy systems can work together as one connected environment." },
  { title: "Scalable Technology", text: "Start with selected areas and expand your smart home as your needs grow." },
  { title: "Premium Experience", text: "From consultation and design to installation and commissioning, we focus on a clean, professional finish." },
];

export function WhyNmcSmartHome() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Why NMC Technology?</Eyebrow>
          <h2 className="balance mt-4 text-[30px] font-semibold leading-tight text-paper sm:text-[34px]">
            Designed. Installed. Integrated.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyNmc.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.06}
              variant="slide-up"
              className="rounded-2xl border border-paper/12 bg-paper/[0.03] p-6"
            >
              <h3 className="font-display text-[18px] font-semibold text-paper">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/70">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
