import heroBg from "@/assets/herobg.webp";
import { ServicesAccordion } from "@/components/services-accordion";

export function Hero() {
  return (
    <section
      className="min-h-screen pt-80 lg:pt-96 pb-64 lg:pb-80 pl-8 lg:pl-16 pr-6 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: 'calc(100% + 0px) calc(0% - 150px)' }}
    >
      <div className="max-w-lg lg:max-w-xl xl:max-w-2xl">
        {/* Headline */}
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight mb-48">
          We're here for brands that stand for something — those who care
          about craft, culture, and people.
        </h1>

        {/* Services Accordion */}
        <ServicesAccordion />
      </div>
    </section>
  );
}
