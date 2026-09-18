import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// One entry per accordion row. A row can carry more than one service family -
// only Growth does today - and the optional `label` is what keeps them apart
// under the shared heading.
type Service = {
  value: string;
  title: string;
  groups: { label?: string; copy: string }[];
};

const services: Service[] = [
  {
    value: "brand-strategy",
    title: "Brand & Communication Strategy",
    groups: [
      {
        copy: "Positioning, identity direction, messaging, tone of voice, audience definition, content pillars, and campaign concepts.",
      },
    ],
  },
  {
    value: "brand-identity",
    title: "Brand Identity & Design",
    groups: [
      {
        copy: "Logos, typography, color palettes, brand guidelines, and the visual systems that hold an identity together across every touchpoint.",
      },
    ],
  },
  {
    value: "website",
    title: "Website & Digital Presence",
    groups: [
      {
        copy: "CMS support, landing pages, SEO content, website audits, conversion improvements, and Google Business Profile.",
      },
    ],
  },
  {
    value: "content-social",
    title: "Content & Social Media",
    groups: [
      {
        copy: "Social media management, content creation, reels, captions, monthly calendars, and community management.",
      },
    ],
  },
  {
    value: "growth-performance",
    title: "Digital Growth & Performance",
    groups: [
      {
        label: "Paid & organic",
        copy: "SEO, Google Ads, Meta Ads, paid social, campaign planning, funnel improvement, and conversion tracking.",
      },
      {
        label: "Growth marketing & automation",
        copy: "Lead generation, ideation, CRM support, cold messaging, email outreach, follow-up flows, and partnership outreach.",
      },
    ],
  },
  {
    value: "research-audit",
    title: "Research, Audit & Project Management",
    groups: [
      {
        copy: "Market research, competitor audits, persona development, performance analysis, and monthly reports.",
      },
    ],
  },
];

export function ServicesAccordion() {
  return (
    <div className="max-w-3xl">
      <Accordion type="single" collapsible className="w-full space-y-2">
        {services.map((service) => (
          <AccordionItem
            key={service.value}
            value={service.value}
            className="border-b border-gray-200"
          >
            {/* Titles run long enough to wrap in the hero's narrow left column,
                so they step down a size on phones */}
            <AccordionTrigger className="text-xl lg:text-2xl font-normal py-4 hover:no-underline font-serif">
              {service.title}
            </AccordionTrigger>
            <AccordionContent className="pb-4 space-y-block">
              {service.groups.map((group, index) => (
                <div key={group.label ?? index}>
                  {group.label && (
                    <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                      {group.label}
                    </h4>
                  )}
                  <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                    {group.copy}
                  </p>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
