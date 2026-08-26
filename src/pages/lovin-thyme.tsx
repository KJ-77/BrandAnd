import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/lovin-thyme/banner.webp";
import brandIllustration from "@/assets/projects/lovin-thyme/brand-illustration.webp";
import hummusTubTop from "@/assets/projects/lovin-thyme/hummus-tub-top.webp";
import hummusTubAngle from "@/assets/projects/lovin-thyme/hummus-tub-angle.webp";
import mankoushePackaging from "@/assets/projects/lovin-thyme/mankoushe-packaging.webp";
// ==========================

const projectData: ProjectData = {
  slug: "lovin-thyme",
  title: "Lovin'thyme - London, UK",
  description:
    "Brand& developed the identity for Lovin'thyme, a brand created to bring the warmth and familiarity of Lebanese cuisine into the rhythm of modern life. Designed for busy individuals and families, the brand offers convenient, straightforward meal solutions without compromising on the essence of home cooking. Its focus on flexibility, practicality, and extended storage makes Lebanese meals easier to enjoy, anytime and anywhere.",
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: brandIllustration, alt: "Lovin'thyme brand illustration", rowSpan: 4, column: 1 },
    { src: hummusTubTop, alt: "Lovin'thyme hummus tub seen from above", rowSpan: 4, column: 1 },

    // Right column
    { src: hummusTubAngle, alt: "Lovin'thyme hummus tub packaging", rowSpan: 4, column: 2 },
    { src: mankoushePackaging, alt: "Lovin'thyme mankoushe with za'atar packaging", rowSpan: 4, column: 2 },
  ],
};

export function LovinThyme() {
  return <ProjectLayout project={projectData} />;
}
