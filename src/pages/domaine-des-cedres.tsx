import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/domaine-des-cedres/banner.webp";
import bottleInOlives from "@/assets/projects/domaine-des-cedres/bottle-in-olives.webp";
import pouringOverFigs from "@/assets/projects/domaine-des-cedres/pouring-over-figs.webp";
import packagingBox from "@/assets/projects/domaine-des-cedres/packaging-box.webp";
import bottleIllustrations from "@/assets/projects/domaine-des-cedres/bottle-illustrations.webp";
import oliveHarvest from "@/assets/projects/domaine-des-cedres/olive-harvest.webp";
// ==========================

const projectData: ProjectData = {
  slug: "domaine-des-cedres",
  title: "Domaine des Cèdres - Jezzine, Lebanon",
  description:
    "Domaine des Cèdres is a Lebanese olive oil brand rooted in tradition and craftsmanship, bringing together authentic heritage and refined elegance. Every detail tells a story, from the olive oil-making process to the celebration of quality, tradition, and craftsmanship. The identity captures the beauty of elevated production through a cohesive, rustic visual language rooted in authenticity and heritage.",
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: bottleInOlives, alt: "Domaine des Cèdres bottle resting in freshly picked olives", rowSpan: 5, column: 1 },
    { src: pouringOverFigs, alt: "Olive oil poured over a plate of figs and cherries", rowSpan: 5, column: 1 },

    // Right column
    { src: packagingBox, alt: "Domaine des Cèdres illustrated packaging box", rowSpan: 2, column: 2 },
    { src: bottleIllustrations, alt: "Bottle surrounded by the brand's harvest illustrations", rowSpan: 5, column: 2 },
    { src: oliveHarvest, alt: "Harvesting olives in the grove", rowSpan: 5, column: 2 },
  ],
};

export function DomaineDesCedres() {
  return <ProjectLayout project={projectData} />;
}
