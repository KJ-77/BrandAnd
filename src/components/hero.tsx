import heroBg from "@/assets/herobg.jpg";
import { ServicesAccordion } from "@/components/services-accordion";

export function Hero() {
  return (
    <section className="min-h-screen pt-28 lg:pt-40 pb-section lg:pb-section-lg px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-stack lg:gap-8 items-start">
          {/* Text Content - Left Column.
              The big pt only kicks in on desktop, where it drops the headline
              to the middle of the tall illustration beside it. On mobile the
              illustration sits above the text, so the offset is dead space. */}
          <div className="order-2 lg:order-1 space-y-stack pt-0 lg:pt-100">
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-snug tracking-tight">
              We're here for brands that stand for something — those who care
              about craft, culture, and people.
            </h1>

            {/* Services Accordion */}
            <ServicesAccordion />
          </div>

          {/* Image - Right Column */}
          <div className="order-1 lg:order-2">
            <img
              src={heroBg}
              alt="Hero background"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
