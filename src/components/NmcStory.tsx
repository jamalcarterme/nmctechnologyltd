import { Container, Reveal } from "./ui";

export default function NmcStory() {
  return (
    <section className="bg-gradient-to-r from-ink to-charcoal py-16 md:py-20 border-t border-paper/10">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <h2 className="balance max-w-3xl text-[32px] font-semibold leading-tight text-paper sm:text-[40px]">
            The NMC Story
          </h2>
        </Reveal>

        <Reveal variant="fade" delay={0.1} className="mt-12 max-w-3xl mx-auto">
          <div className="space-y-6 text-[16px] leading-relaxed text-paper/75">
            <p>
              NMC Technology and Automation was created out of a need for ease,
              comfort and security in our homes, especially with the growing
              insecurity in the country.
            </p>

            <p>
              Another key concern was the amount spent on electricity bills and
              diesel. With our smart home automation, these costs were reduced
              by 40% thanks to the energy-saving features of our solutions.
            </p>

            <p>
              Faced with these challenges, our CEO decided to automate his own
              home, and it proved to be one of his best decisions. He now
              leaves home without worry, because he can switch off appliances,
              lights, air conditioners and more from his phone, from anywhere
              in the world.
            </p>

            <p>
              This inspired him to offer the same service to homes and
              businesses across Nigeria. Backed by years of engineering
              expertise and a passion for customer satisfaction, NMC Technology
              was born.
            </p>

            <p>
              Today, we are a trusted partner providing innovative electrical,
              solar, security and automation solutions that make homes, offices
              and businesses safer, smarter and more energy-efficient.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
