import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/matterlab/booklet-stack.webp";
import materialSamples from "@/assets/projects/matterlab/material-samples.webp";
import businessCards from "@/assets/projects/matterlab/business-cards.webp";
import letterheads from "@/assets/projects/matterlab/letterheads.webp";
import brochurePoster from "@/assets/projects/matterlab/brochure-poster.webp";
// ==========================

const projectData: ProjectData = {
  slug: "matterlab",
  title: "Matterlab - Beirut, Lebanon",
  description:
    "Brand& developed the identity for Matterlab, a brand built around curiosity, experimentation, and the transformation of ideas into tangible experiences. The visual language reflects a balance between precision and creativity, giving the brand a distinctive and contemporary character. Through a considered identity system, Matterlab communicates a spirit of exploration while remaining clear, intelligent, and approachable.",
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: materialSamples, alt: "Matterlab material samples", rowSpan: 5, column: 1 },
    { src: businessCards, alt: "Matterlab business cards on a textured surface", rowSpan: 5, column: 1 },

    // Right column
    { src: brochurePoster, alt: "Matterlab brochure and poster", rowSpan: 5, column: 2 },
    { src: letterheads, alt: "Matterlab letterheads across the brand palette", rowSpan: 5, column: 2 },
  ],
};

export function Matterlab() {
  return <ProjectLayout project={projectData} />;
}
