import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/cortina/banner.webp";
import sandwichSky from "@/assets/projects/cortina/sandwich-sky.webp";
import sandwichesLilac from "@/assets/projects/cortina/sandwiches-lilac.webp";
import almondBarsSky from "@/assets/projects/cortina/almond-bars-sky.webp";
import coolerBeach from "@/assets/projects/cortina/cooler-beach.webp";
import cookieSandwichesBlue from "@/assets/projects/cortina/cookie-sandwiches-blue.webp";
import sandwichBeach from "@/assets/projects/cortina/sandwich-beach.webp";
import popsicleStripes from "@/assets/projects/cortina/popsicle-stripes.webp";
// ==========================

const projectData: ProjectData = {
  slug: "cortina",
  title: "Cortina - Lebanon",
  description:
    "Brand& developed the identity for Cortina, an ice cream brand that brings a playful yet refined character to the world of indulgence. The visual identity combines distinctive typography, vibrant elements, and a sense of nostalgia to create a brand that feels both familiar and contemporary. Designed to stand out while capturing the joy of ice cream, Cortina's identity creates a memorable and inviting experience across every touchpoint.",
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: sandwichSky, alt: "Cortina ice cream sandwich against the sky", rowSpan: 5, column: 1 },
    { src: sandwichesLilac, alt: "Cortina ice cream sandwiches on a lilac backdrop", rowSpan: 5, column: 1 },
    { src: almondBarsSky, alt: "Stacked Cortina almond ice cream bars", rowSpan: 5, column: 1 },
    { src: coolerBeach, alt: "Cortina cooler filled with Cocoa Switch bars on the beach", rowSpan: 5, column: 1 },

    // Right column
    { src: cookieSandwichesBlue, alt: "Cortina cookie ice cream sandwiches on a blue backdrop", rowSpan: 5, column: 2 },
    { src: sandwichBeach, alt: "Cortina ice cream sandwich held at the beach", rowSpan: 5, column: 2 },
    { src: popsicleStripes, alt: "Cortina strawberry popsicle held against a striped shirt", rowSpan: 5, column: 2 },
  ],
};

export function Cortina() {
  return <ProjectLayout project={projectData} />;
}
