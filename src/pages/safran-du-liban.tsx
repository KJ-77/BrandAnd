import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/safran-du-liban/banner.webp";
import saffronTins from "@/assets/projects/safran-du-liban/saffron-tins.webp";
import toteBag from "@/assets/projects/safran-du-liban/tote-bag.webp";
import giftBoxes from "@/assets/projects/safran-du-liban/gift-boxes.webp";
import businessCards from "@/assets/projects/safran-du-liban/business-cards.webp";
import reedDiffuser from "@/assets/projects/safran-du-liban/reed-diffuser.webp";
// ==========================

const projectData: ProjectData = {
  slug: "safran-du-liban",
  title: "Safran du Liban - Beirut, Lebanon",
  // Copy is the client's own, from local/new project/Safran du Liban.docx
  description: [
    "This direction positions Safran du Liban as a refined expression of Lebanese heritage, bringing together the richness of the land with a more elevated, premium brand language. Rather than relying on traditional cues alone, the identity transforms Lebanese nature, flora, fauna, and cultural references into a distinctive visual world.",
    "The detailed botanical illustrations create a sense of discovery and storytelling, making the packaging feel collectible and deeply connected to place. Paired with sophisticated serif typography and restrained composition, the brand balances heritage with luxury, giving Safran du Liban a timeless and artisanal character.",
    "The result is a brand that feels rooted, authentic, crafted, and proudly Lebanese — yet sophisticated enough to stand within a premium international market.",
  ],
  bannerImage: banner,
  instagram: "https://www.instagram.com/p/CyVoDnwsNC9/",
  images: [
    // Left column
    { src: saffronTins, alt: "Safran du Liban saffron tins with botanical illustrations", rowSpan: 2, column: 1 },
    { src: toteBag, alt: "Burgundy tote bag with the gold Safran du Liban crest", rowSpan: 4, column: 1 },
    { src: giftBoxes, alt: "Deep purple Safran du Liban gift boxes with gold foil", rowSpan: 3, column: 1 },

    // Right column
    { src: businessCards, alt: "Safran du Liban business cards in navy, burgundy and brown", rowSpan: 3, column: 2 },
    { src: reedDiffuser, alt: "Safran du Liban reed diffuser bottle", rowSpan: 5, column: 2 },
  ],
};

export function SafranDuLiban() {
  return <ProjectLayout project={projectData} />;
}
