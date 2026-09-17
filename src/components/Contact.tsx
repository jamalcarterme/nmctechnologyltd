import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Container } from "./ui";

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-16 md:py-20">
      <Container className="mx-auto max-w-2xl text-center">
        <div className="mx-auto grid gap-8 text-left sm:grid-cols-2">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  Call or WhatsApp
                </p>
                <div className="mt-1 flex flex-col gap-0.5">
                  {site.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={`tel:${phone.href}`}
                      className="text-[16px] font-medium text-paper hover:text-gold"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <Mail className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-[16px] font-medium text-paper hover:text-gold"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  Office
                </p>
                <p className="mt-1 max-w-xs text-[16px] font-medium leading-snug text-paper">
                  {site.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <Clock className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  Working hours
                </p>
                <p className="mt-1 text-[16px] font-medium text-paper">
                  Mon – Sat, 8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
      </Container>
    </section>
  );
}
