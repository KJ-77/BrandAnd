import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServicesAccordion() {
  return (
    <div className="max-w-sm">
      <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="brand-strategy" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-normal py-6 hover:no-underline">
              Brand Strategy
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              Strategic brand positioning, messaging, and planning to help your
              brand stand out in the market.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand-identity" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-normal py-6 hover:no-underline">
              Brand Identity & Design
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              Comprehensive visual identity systems including logos, typography,
              color palettes, and brand guidelines.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="digital-experience" className="border-b border-gray-200">
            <AccordionTrigger className="text-lg font-normal py-6 hover:no-underline">
              Digital & Experience
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-6">
              Digital experiences that bring your brand to life through web design,
              user experience, and interactive solutions.
            </AccordionContent>
          </AccordionItem>
      </Accordion>
    </div>
  );
}
