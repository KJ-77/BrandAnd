import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServicesAccordion() {
  return (
    <div className="max-w-3xl">
      <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="brand-strategy" className="border-b border-gray-200">
            <AccordionTrigger className="text-2xl font-normal py-4 hover:no-underline">
              Brand Strategy
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              Strategic brand positioning, messaging, and planning to help your
              brand stand out in the market.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="brand-identity" className="border-b border-gray-200">
            <AccordionTrigger className="text-2xl font-normal py-4 hover:no-underline">
              Brand Identity & Design
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              Comprehensive visual identity systems including logos, typography,
              color palettes, and brand guidelines.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="digital-experience" className="border-b border-gray-200">
            <AccordionTrigger className="text-2xl font-normal py-4 hover:no-underline">
              Digital & Experience
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 pb-4">
              Digital experiences that bring your brand to life through web design,
              user experience, and interactive solutions.
            </AccordionContent>
          </AccordionItem>
      </Accordion>
    </div>
  );
}
