import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/sajpan/banner.webp";
import menuCheckered from "@/assets/projects/sajpan/menu-checkered.webp";
import habibiMural from "@/assets/projects/sajpan/habibi-mural.webp";
import stickerSet from "@/assets/projects/sajpan/sticker-set.webp";
import stampedSajBreads from "@/assets/projects/sajpan/stamped-saj-breads.webp";
import prepStation from "@/assets/projects/sajpan/prep-station.webp";
import coffeeCup from "@/assets/projects/sajpan/coffee-cup.webp";
import tetaEatingSaj from "@/assets/projects/sajpan/teta-eating-saj.webp";
import takeawayBag from "@/assets/projects/sajpan/takeaway-bag.webp";
import staffTee from "@/assets/projects/sajpan/staff-tee.webp";
import paperBagsNapkins from "@/assets/projects/sajpan/paper-bags-napkins.webp";
import doughRolling from "@/assets/projects/sajpan/dough-rolling.webp";
import wrappingPaper from "@/assets/projects/sajpan/wrapping-paper.webp";
// ==========================

const projectData: ProjectData = {
  slug: "sajpan",
  title: "SAJPAN - Chicago",
  description: [
    "Two women. Two cultures. One seriously good idea. One brings the Lebanese saj. The other brings the Mexican heat. SAJPAN is what happens when tradition meets attitude — bold flavors, big personalities, and a fusion that refuses to play it safe.",
    "At Brand&, we didn't just brand a food concept. We built a world around it. From strategy and positioning to the visual identity, tone of voice, colors, graphics, and overall brand experience, we translated the spirit of these two cultures into something fresh, playful, and unmistakably SAJPAN.",
  ],
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: menuCheckered, alt: "SAJPAN menu on the brand's checkered pattern", rowSpan: 3, column: 1 },
    { src: habibiMural, alt: "Friends eating under the HABIBI rooster mural", rowSpan: 5, column: 1 },
    { src: stickerSet, alt: "SAJPAN sticker set", rowSpan: 3, column: 1 },
    { src: stampedSajBreads, alt: "Saj breads stamped with SAJPAN brand icons", rowSpan: 5, column: 1 },
    { src: prepStation, alt: "SAJPAN prep station seen from above", rowSpan: 5, column: 1 },
    { src: coffeeCup, alt: "SAJPAN patterned coffee cup", rowSpan: 3, column: 1 },

    // Right column
    { src: tetaEatingSaj, alt: "Teta enjoying a SAJPAN wrap", rowSpan: 5, column: 2 },
    { src: takeawayBag, alt: "SAJPAN takeaway bag", rowSpan: 3, column: 2 },
    { src: staffTee, alt: "SAJPAN staff t-shirt", rowSpan: 5, column: 2 },
    { src: paperBagsNapkins, alt: "SAJPAN paper bags and printed napkins", rowSpan: 4, column: 2 },
    { src: doughRolling, alt: "Rolling dough on the saj", rowSpan: 5, column: 2 },
    { src: wrappingPaper, alt: "SAJPAN patterned wrapping paper", rowSpan: 3, column: 2 },
  ],
};

export function Sajpan() {
  return <ProjectLayout project={projectData} />;
}
