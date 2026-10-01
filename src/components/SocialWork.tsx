import { site } from "@/lib/data";
import { Container, Eyebrow, Reveal } from "./ui";
import TikTokIcon from "./TikTokIcon";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import YouTubeIcon from "./YouTubeIcon";

const socials = [
  {
    label: "TikTok",
    href: site.tiktok,
    icon: (
      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-paper/25 text-paper">
        <TikTokIcon className="h-5 w-5" />
      </span>
    ),
  },
  {
    label: "Instagram",
    href: site.instagram,
    icon: <InstagramIcon className="h-9 w-9" />,
  },
  {
    label: "Facebook",
    href: site.facebook,
    icon: <FacebookIcon className="h-9 w-9" />,
  },
  {
    label: "YouTube",
    href: site.youtube,
    icon: <YouTubeIcon className="h-9 w-9" />,
  },
];

export default function SocialWork() {
  return (
    <section className="bg-ink pb-16 md:pb-20">
      <Container>
        <Reveal className="rounded-3xl border border-paper/10 bg-charcoal px-6 py-10 text-center md:px-12 md:py-12">
          <div className="flex justify-center">
            <Eyebrow>Follow our work</Eyebrow>
          </div>
          <h2 className="balance mt-4 text-[26px] font-semibold leading-tight text-paper sm:text-[30px]">
            See our actual work here
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-paper/65">
            Watch real installations, site visits and finished projects on our
            social pages — follow us for new updates every week.
          </p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`NMC Technology on ${s.label}`}
                  className="group inline-flex items-center gap-3 rounded-full border border-paper/15 bg-ink/60 py-2 pl-2 pr-5 text-[14px] font-semibold text-paper transition-colors hover:border-gold hover:text-gold"
                >
                  <span className="transition-transform group-hover:scale-105">
                    {s.icon}
                  </span>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
