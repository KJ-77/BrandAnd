import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/eggs-with-benefits/banner.webp";
import boxFourPack from "@/assets/projects/eggs-with-benefits/box-four-pack.webp";
import brandIllustration from "@/assets/projects/eggs-with-benefits/brand-illustration.webp";
import chickHeadband from "@/assets/projects/eggs-with-benefits/chick-headband.webp";
import henAndChicks from "@/assets/projects/eggs-with-benefits/hen-and-chicks.webp";
import logo from "@/assets/projects/eggs-with-benefits/logo.webp";
import boxEightPack from "@/assets/projects/eggs-with-benefits/box-eight-pack.webp";
import nestIllustration from "@/assets/projects/eggs-with-benefits/nest-illustration.webp";
import ribbonChicken from "@/assets/projects/eggs-with-benefits/ribbon-chicken.webp";
import hulaHoopChicken from "@/assets/projects/eggs-with-benefits/hula-hoop-chicken.webp";
// ==========================

const projectData: ProjectData = {
  slug: "eggs-with-benefits",
  title: "Eggs with Benefits",
  description: [
    "At Brand&, we created a playful packaging identity that turns the everyday egg into something full of personality. Through hand-drawn typography, quirky illustrated characters, and soft pops of color, we made nutrition feel approachable, joyful, and memorable.",
    "The result is a distinctive visual world where every egg has a little character — bringing together wholesome benefits with a fresh, unexpected sense of fun.",
  ],
  // instagram: "https://www.instagram.com/<handle>/",
  bannerImage: banner,
  images: [
    // Left column
    { src: boxFourPack, alt: "Eggs with Benefits four-pack carton", rowSpan: 3, column: 1 },
    { src: brandIllustration, alt: "Illustrated chickens dancing around a nest of eggs", rowSpan: 4, column: 1 },
    { src: chickHeadband, alt: "Illustrated chick wearing a headband", rowSpan: 3, column: 1 },
    { src: henAndChicks, alt: "Illustrated hen leading three chicks", rowSpan: 2, column: 1 },
    { src: logo, alt: "Eggs with Benefits hand-drawn logo", rowSpan: 4, column: 1 },

    // Right column
    { src: boxEightPack, alt: "Eggs with Benefits eight-pack carton", rowSpan: 3, column: 2 },
    { src: nestIllustration, alt: "Illustrated nest holding three pastel eggs", rowSpan: 4, column: 2 },
    { src: ribbonChicken, alt: "Illustrated chicken dancing with a ribbon", rowSpan: 4, column: 2 },
    { src: hulaHoopChicken, alt: "Illustrated chicken spinning a hula hoop", rowSpan: 4, column: 2 },
  ],
};

export function EggsWithBenefits() {
  return <ProjectLayout project={projectData} />;
}
