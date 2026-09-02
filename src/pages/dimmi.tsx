import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/dimmi/banner.webp";
import candleBoxesGrid from "@/assets/projects/dimmi/candle-boxes-grid.webp";
import brandCardPlatter from "@/assets/projects/dimmi/brand-card-platter.webp";
import hangTagSilk from "@/assets/projects/dimmi/hang-tag-silk.webp";
import shoppingBag from "@/assets/projects/dimmi/shopping-bag.webp";
import stackedBoxes from "@/assets/projects/dimmi/stacked-boxes.webp";
// ==========================

const projectData: ProjectData = {
  slug: "dimmi",
  title: "Dimmi - Global",
  description: [
    "Brand& shaped Dimmi into a quiet, tactile lifestyle brand — a soft rounded wordmark, a muted palette and a monochrome material story that lets the product do the talking.",
    "The identity was built to travel across categories, from high-end loungewear to home fragrance, without ever raising its voice. Hang tags, mailer boxes, candle packaging and shopping bags all sit on the same restrained system of warm neutrals, generous space and considered light.",
  ],
  // instagram: "https://www.instagram.com/<handle>/",
  bannerImage: banner,
  images: [
    // Left column
    { src: candleBoxesGrid, alt: "Dimmi candle boxes arranged in a grid", rowSpan: 5, column: 1 },
    { src: brandCardPlatter, alt: "Dimmi brand card on a silver platter", rowSpan: 5, column: 1 },

    // Right column
    { src: hangTagSilk, alt: "Dimmi hang tag resting on silk", rowSpan: 3, column: 2 },
    { src: shoppingBag, alt: "Dimmi shopping bag in raking light", rowSpan: 2, column: 2 },
    { src: stackedBoxes, alt: "Stacked Dimmi mailer boxes with a business card", rowSpan: 2, column: 2 },
  ],
};

export function Dimmi() {
  return <ProjectLayout project={projectData} />;
}
