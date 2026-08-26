import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/zad/banner.webp";
import packagingRange from "@/assets/projects/zad/packaging-range.webp";
import mezzeSpread from "@/assets/projects/zad/mezze-spread.webp";
import brandedApron from "@/assets/projects/zad/branded-apron.webp";
import jamJars from "@/assets/projects/zad/jam-jars.webp";
import storefrontSign from "@/assets/projects/zad/storefront-sign.webp";
import pouchesTray from "@/assets/projects/zad/pouches-tray.webp";
import makdousPouches from "@/assets/projects/zad/makdous-pouches.webp";
// ==========================

const projectData: ProjectData = {
  slug: "zad",
  title: "Zad - Lebanon",
  description: [
    "For Zad, Brand& created a visual identity that celebrates the richness of real, authentic food — bringing together Lebanese heritage, natural ingredients, and a contemporary point of view.",
    "From the logo and packaging to the brand language and visual world, every detail was designed to make eating real feel simple, honest, and beautifully familiar.",
    "Zad — Eat Real. أكل حقيقي.",
  ],
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: packagingRange, alt: "Zad packaging range on a service tray", rowSpan: 3, column: 1 },
    { src: mezzeSpread, alt: "Lebanese mezze spread styled for Zad", rowSpan: 5, column: 1 },
    { src: brandedApron, alt: "Zad branded apron", rowSpan: 5, column: 1 },
    { src: jamJars, alt: "Zad jam jars", rowSpan: 5, column: 1 },

    // Right column
    { src: storefrontSign, alt: "Zad pomegranate storefront sign", rowSpan: 5, column: 2 },
    { src: pouchesTray, alt: "Zad kishik and za'atar pouches", rowSpan: 5, column: 2 },
    { src: makdousPouches, alt: "Zad makdous pouches", rowSpan: 5, column: 2 },
  ],
};

export function Zad() {
  return <ProjectLayout project={projectData} />;
}
