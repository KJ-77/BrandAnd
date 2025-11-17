import heroBg from "@/assets/herobg.webp";
import { ServicesAccordion } from "@/components/services-accordion";

export function Hero() {
  return (
    <section
      className="min-h-screen pt-32 pb-16 px-6 bg-cover bg-right bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="container mx-auto">
        <div className="max-w-xl">
          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight tracking-tight mb-16">
            We're here for brands that stand for something — those who care
            about craft, culture, and people.
          </h1>

          {/* Services Accordion */}
          <ServicesAccordion />
        </div>
      </div>
    </section>
  );
}
