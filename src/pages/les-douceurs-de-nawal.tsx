import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/les-douceurs-de-nawal/banner.webp";
import logoIllustration from "@/assets/projects/les-douceurs-de-nawal/logo-illustration.webp";
import shoppingBag from "@/assets/projects/les-douceurs-de-nawal/shopping-bag.webp";
import chocolateBox from "@/assets/projects/les-douceurs-de-nawal/chocolate-box.webp";
import monkeyIllustration from "@/assets/projects/les-douceurs-de-nawal/monkey-illustration.webp";
// ==========================

const projectData: ProjectData = {
  slug: "les-douceurs-de-nawal",
  title: "Les Douceurs de Nawal - Beirut, Lebanon",
  description: [
    "A new chapter for Les Douceurs de Nawal, reimagined by Brand&.",
    "Handcrafted by Nawal, these artisanal chocolates now carry an identity that reflects their essence: detailed hand-drawn illustrations full of whimsy, earthy tones blended with warm cocoa hues, and typography that marries timeless elegance with a touch of fantasy.",
    "Just like every chocolate tells a story, the brand now speaks with a refined voice; one that celebrates craft, imagination, and the magic of cocoa. 🍫",
  ],
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: logoIllustration, alt: "Les Douceurs de Nawal illustrated logo", rowSpan: 5, column: 1 },
    { src: shoppingBag, alt: "Les Douceurs de Nawal branded shopping bag", rowSpan: 5, column: 1 },

    // Right column
    { src: chocolateBox, alt: "Les Douceurs de Nawal chocolate box shared over coffee", rowSpan: 5, column: 2 },
    { src: monkeyIllustration, alt: "Hand-drawn monkey illustration from the brand world", rowSpan: 5, column: 2 },
  ],
};

export function LesDouceursDeNawal() {
  return <ProjectLayout project={projectData} />;
}
