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
              NMC Technology and Automation was created as a result of the need
              for ease, comfort and security in our homes, most especially with
              the significant increase in insecurity in the country.
            </p>

            <p>
              Another key factor considered was the utility amount spent in
              total for light bills and diesel; with our smart home automations
              these costs were significantly reduced by 40% due to the energy
              saving abilities proffered by our solution.
            </p>

            <p>
              Our CEO, when faced with the aforementioned hassles, conceived the
              idea of automating his home which has proven to be one of the best
              decisions, due to the ease and lack of worry when leaving his
              home, as he can switch off appliances, lights, air conditioners,
              etc all from his phone from anywhere in the world.
            </p>

            <p>
              This sparked the idea to extend this service to homes and
              businesses across Nigeria. With the backing of years of
              engineering expertise and a passion for customer satisfaction,
              NMC Technology was born.
            </p>

            <p>
              Today, we stand as a trusted partner in providing innovative
              electrical, solar, security, and automation solutions designed to
              make homes, offices, and businesses safer, smarter, and more
              energy-efficient.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
