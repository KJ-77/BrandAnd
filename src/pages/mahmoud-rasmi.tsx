import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/mahmoud-rasmi/banner.webp";
import notebookGranada from "@/assets/projects/mahmoud-rasmi/notebook-granada.webp";
import stationeryFlatlay from "@/assets/projects/mahmoud-rasmi/stationery-flatlay.webp";
import businessCardsGrid from "@/assets/projects/mahmoud-rasmi/business-cards-grid.webp";
// ==========================

const projectData: ProjectData = {
  slug: "mahmoud-rasmi",
  title: "Mahmoud Rasmi - Salamanca, Spain",
  description:
    "Brand& developed the visual identity for Mahmoud Rasmi, a consultant specializing in culture and tourism. The logo is built around his initials, transformed into a distinctive icon through geometric forms inspired by cultural artifacts, including arches and squares. The resulting identity brings together heritage and contemporary design, creating a visual language that reflects Mahmoud's work while establishing a memorable and cohesive presence across all brand touchpoints.",
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: notebookGranada, alt: "Mahmoud Rasmi embossed notebook", rowSpan: 4, column: 1 },
    { src: stationeryFlatlay, alt: "Mahmoud Rasmi stationery set", rowSpan: 2, column: 1 },

    // Right column
    { src: businessCardsGrid, alt: "Mahmoud Rasmi business cards across the brand palette", rowSpan: 4, column: 2 },
  ],
};

export function MahmoudRasmi() {
  return <ProjectLayout project={projectData} />;
}
