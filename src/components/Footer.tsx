import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { nav, site, waLink } from "@/lib/data";
import { Container, Reveal } from "./ui";
import TikTokIcon from "./TikTokIcon";
import InstagramIcon from "./InstagramIcon";

export default function Footer() {
  return (
    <footer className="footer-glow relative overflow-hidden bg-ink pb-24 pt-20 md:pb-20">
      <Container className="relative grid gap-12 border-b border-paper/10 pb-16 md:grid-cols-[1.3fr_1fr_1.1fr]">
        <Reveal>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt={`${site.name} logo`}
              width={112}
              height={112}
              className="h-14 w-14 shrink-0"
            />
            <span className="font-display text-xl font-semibold text-paper">
              NMC <span className="text-gold">Technology</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper/55">
            {site.tagline}. With NMC Technology, you can power, secure, and automate every part of your property — from wherever you are.
          </p>
          <a
            href={waLink("Hi NMC Technology, I'd like to speak with your team.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[14px] font-semibold text-ink hover:bg-gold-light"
          >
            <PhoneCall className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/70">
            Quick Menu
          </p>
          <span className="mt-2 block h-[2px] w-8 bg-gold" />
          <ul className="mt-5 flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-paper/65 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/70">
            Contact
          </p>
          <span className="mt-2 block h-[2px] w-8 bg-gold" />
          <ul className="mt-5 flex flex-col gap-3 text-[15px] text-paper/65">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <span className="max-w-[240px] text-paper/55">{site.address}</span>
            </li>
            {site.phones.map((phone) => (
              <li key={phone.href} className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                <a href={`tel:${phone.href}`} className="hover:text-gold">
                  {phone.display}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NMC Technology on TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 text-paper transition-colors hover:border-gold hover:text-gold"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="NMC Technology on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full text-white shadow-sm transition-transform hover:scale-105"
              style={{
                background:
                  "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
              }}
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </Reveal>
      </Container>

      <Container className="flex flex-col items-center justify-center gap-2 py-8 text-center text-[13px] text-paper/40">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
      </Container>
    </footer>
  );
}
