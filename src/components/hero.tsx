import heroBg from "@/assets/herobg.jpg";
import { ServicesAccordion } from "@/components/services-accordion";

export function Hero() {
  return (
    <section className="min-h-screen pt-32 lg:pt-40 pb-20 lg:pb-32 px-4 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 lg:gap-8 items-start">
          {/* Text Content - Left Column */}
          <div className="order-2 lg:order-1 space-y-12 lg:space-y-16">
            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-snug tracking-tight">
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
