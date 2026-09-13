import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/project1/banner.webp";
import image001 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_001_1.webp";
import image060 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_060_1.webp";
import image073 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_073_1.webp";
import image071 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_071_1.webp";
import image025 from "@/assets/projects/project1/Al_Muhtar_backery_BeARTpro_025_1.webp";
import image068 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_068_1.webp";
import image069 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_069_1.webp";
// ==========================

const projectData: ProjectData = {
  slug: "al-mokhtar",
  title: "Al Mukhtar - UAE",
  description: [
    "Brand& developed the identity for Al Mukhtar, a bakery built around the generosity of the Arabic table — daily bakes, savory manakish, and trays of sweets made for sharing.",
    "The identity lives in a hand-drawn world of crescents, lanterns, dates, coffee pots and sweets, held together by a stamped logo that reads as naturally in Arabic as it does in Latin. A soft palette of blues and creams keeps the packaging calm and lets the illustrations, and the products inside them, do the talking.",
    "From everyday boxes to the Ramadan gifting range, art direction, and food styling, every detail was designed to feel crafted, warm, and unmistakably Al Mukhtar.",
  ],
  bannerImage: banner,
  instagram: "https://www.instagram.com/almukhtar.uae/",
  images: [
    // Left column - the two landscape shots sit here and the portraits are split
    // 4/3 across the columns, which is what keeps the two columns level
    { src: image001, alt: "Al Mukhtar sandwiches, salads and bottled juices styled on yellow", rowSpan: 3, column: 1 },
    { src: image060, alt: "Almond-topped pie framed by illustrated Al Mukhtar boxes", rowSpan: 5, column: 1 },
    { src: image073, alt: "Open Al Mukhtar boxes of maamoul and chocolate-dipped cookies", rowSpan: 2, column: 1 },
    { src: image071, alt: "Ramadan Mubarak dessert among the Al Mukhtar gifting range", rowSpan: 5, column: 1 },

    // Right column
    { src: image025, alt: "Manakish, labneh and tea styled for Al Mukhtar", rowSpan: 5, column: 2 },
    { src: image068, alt: "Pastel Al Mukhtar gifting boxes beside a plate of pastries", rowSpan: 5, column: 2 },
    { src: image069, alt: "Layered dessert set among illustrated Al Mukhtar boxes", rowSpan: 5, column: 2 },
  ],
};

export function AlMokhtar() {
  return <ProjectLayout project={projectData} />;
}
