import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/valor/banner.webp";
import flags from "@/assets/projects/valor/flags.webp";
import businessCards from "@/assets/projects/valor/business-cards.webp";
import envelopeStationery from "@/assets/projects/valor/envelope-stationery.webp";
import logoNavy from "@/assets/projects/valor/logo-navy.webp";
import doorHanger from "@/assets/projects/valor/door-hanger.webp";
// ==========================

const projectData: ProjectData = {
  slug: "valor",
  title: "Valor - UK",
  description:
    "Brand& developed a refined visual identity for Valor, combining an elegant typeface with a strong symbolic mark that reflects professionalism, prestige, and strength. Inspired by steel's durability and versatility within the construction industry, the identity balances boldness with sophistication. Simplified forms, considered typography, negative space, and a refined color palette come together to create a distinctive brand that communicates Valor's core qualities of strength, bravery, and balance.",
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: flags, alt: "Valor Collective flags", rowSpan: 2, column: 1 },
    { src: businessCards, alt: "Valor Collective business cards", rowSpan: 4, column: 1 },
    { src: envelopeStationery, alt: "Valor Collective envelope and stationery", rowSpan: 4, column: 1 },

    // Right column
    { src: logoNavy, alt: "Valor Collective logo on navy", rowSpan: 5, column: 2 },
    { src: doorHanger, alt: "Valor Collective door hanger", rowSpan: 4, column: 2 },
  ],
};

export function Valor() {
  return <ProjectLayout project={projectData} />;
}
