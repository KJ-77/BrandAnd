import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/forth-and-gyfted/banner.webp";
import storefrontSign from "@/assets/projects/forth-and-gyfted/storefront-sign.webp";
import illustratedCup from "@/assets/projects/forth-and-gyfted/illustrated-cup.webp";
import stackedCups from "@/assets/projects/forth-and-gyfted/stacked-cups.webp";
import ginghamTote from "@/assets/projects/forth-and-gyfted/gingham-tote.webp";
import enamelPins from "@/assets/projects/forth-and-gyfted/enamel-pins.webp";
import windowGraphics from "@/assets/projects/forth-and-gyfted/window-graphics.webp";
import embroideredSleeve from "@/assets/projects/forth-and-gyfted/embroidered-sleeve.webp";
import redToteBag from "@/assets/projects/forth-and-gyfted/red-tote-bag.webp";
import embroideredCap from "@/assets/projects/forth-and-gyfted/embroidered-cap.webp";
import kidsTee from "@/assets/projects/forth-and-gyfted/kids-tee.webp";
import readingNook from "@/assets/projects/forth-and-gyfted/reading-nook.webp";
// ==========================

const projectData: ProjectData = {
  slug: "forth-and-gyfted",
  title: "Forth & Gyfted - Kuwait",
  description: [
    "Forth & Gyfted is a welcoming space for children in Kuwait to grow, express themselves, and discover what makes them unique.",
    "Our identity is inspired by the natural creativity of childhood — from playful handwriting and imperfect shapes to expressive colors and organic forms. Every detail reflects our belief that there is no one way to be a child, and that individuality should be encouraged and celebrated.",
    "The playful custom lettering gives the brand a warm, friendly personality, while the vibrant color palette brings together empathy, growth, creativity, trust, confidence, and joy.",
    "Together, the identity creates a space that feels safe, nurturing, inclusive, and full of possibility — a place where every child can feel seen, supported, and free to be themselves.",
  ],
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: storefrontSign, alt: "Forth & Gyfted dimensional storefront sign", rowSpan: 2, column: 1 },
    { src: illustratedCup, alt: "Illustrated Forth & Gyfted paper cup", rowSpan: 5, column: 1 },
    { src: stackedCups, alt: "Stacked Forth & Gyfted branded cups", rowSpan: 2, column: 1 },
    { src: ginghamTote, alt: "Gingham Forth & Gyfted tote bag", rowSpan: 5, column: 1 },
    { src: enamelPins, alt: "Forth & Gyfted pin badges on a denim jacket", rowSpan: 5, column: 1 },

    // Right column
    { src: windowGraphics, alt: "Forth & Gyfted storefront window graphics", rowSpan: 2, column: 2 },
    { src: embroideredSleeve, alt: "Embroidered F&G monogram on a t-shirt sleeve", rowSpan: 2, column: 2 },
    { src: redToteBag, alt: "Red Forth & Gyfted tote bag with tufted lettering", rowSpan: 5, column: 2 },
    { src: embroideredCap, alt: "Child wearing an embroidered Forth & Gyfted cap", rowSpan: 4, column: 2 },
    { src: kidsTee, alt: "Child wearing a Forth & Gyfted t-shirt", rowSpan: 4, column: 2 },
    { src: readingNook, alt: "Forth & Gyfted reading nook interior", rowSpan: 2, column: 2 },
  ],
};

export function ForthAndGyfted() {
  return <ProjectLayout project={projectData} />;
}
