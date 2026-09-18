"use client";

import { useState } from "react";
import Image from "next/image";
import { waLink } from "@/lib/data";
import { homePackages, starterPackages, type HomePackage } from "@/lib/smartHomePackages";
import { Container, Eyebrow, Reveal } from "./ui";

const WA_INTRO = "Hi NMC Technology, I'm interested in a Smart Home Automation package.";

function GetStarted({ name, contact = false }: { name: string; contact?: boolean }) {
  return (
    <a
      href={waLink(
        contact
          ? `${WA_INTRO} I'd like more information about the ${name}.`
          : `${WA_INTRO} I'm interested in the ${name}. Please share next steps.`,
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
    >
      {contact ? "Contact us" : "Get Started"}
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
      alt={`${pkg.name} – smart home interior`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

export default function SmartHomePackages({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-24 bg-ink py-16 md:py-20">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Smart Home Packages</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[34px]">
            Choose the Package That Fits Your Home
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/60">
            Start small with one of our starter bundles, or cover your whole home with a complete
            package. Every package includes supply, professional installation and app setup.
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
          Complete home packages
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
                <h4 className="font-display text-[22px] font-semibold text-paper">
                  {pkg.name}
                  {pkg.price && <span className="text-gold">: {pkg.price}</span>}
                </h4>
                <p className="mt-4 text-[15px] leading-relaxed text-paper/70">{pkg.coverage}</p>
                {pkg.includes && (
                  <>
                    <p className="mt-5 text-[15px] font-semibold text-paper">
                      What you get in this package:
                    </p>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-paper/70">{pkg.includes}</p>
                  </>
                )}
                {pkg.note && (
                  <p className="mt-4 text-[15px] leading-relaxed text-paper/70">{pkg.note}</p>
                )}
                <div>
                  <GetStarted name={pkg.name} contact={!pkg.price} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-paper/40">
          Final pricing depends on property size, coverage area and the equipment you choose.
        </p>
        <p className="mt-6 text-center text-[15px] text-paper/70">
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
