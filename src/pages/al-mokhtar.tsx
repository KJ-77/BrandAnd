import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner1 from "@/assets/projects/project1/banner1.webp";
import image001 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_001_1.webp";
import image060 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_060_1.webp";
import image071 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_071_1.webp";
import trayMockup1 from "@/assets/projects/project1/Free_Food_Tray_Mockup_1.webp";
import image025 from "@/assets/projects/project1/Al_Muhtar_backery_BeARTpro_025_1.webp";
import image068 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_068_1.webp";
import image069 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_069_1.webp";
import image073 from "@/assets/projects/project1/Al_Mukhtar_Bakery_BeARTpro_073_1.webp";
import trayMockup2 from "@/assets/projects/project1/Free_Food_Tray_Mockup_2.webp";
// ==========================

const projectData: ProjectData = {
  slug: "al-mokhtar",
  title: "Al Mukhtar - UAE",
  // TODO: still placeholder copy - swap in the real write-up
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  bannerImage: banner1,
  instagram: "https://www.instagram.com/almukhtar.uae/",
  images: [
    // Left column
    { src: image001, alt: "Al Mokhtar Bakery Interior", rowSpan: 4, column: 1 },
    { src: image060, alt: "Al Mokhtar Bakery Display", rowSpan: 3, column: 1 },
    { src: image071, alt: "Al Mokhtar Bakery Detail", rowSpan: 4, column: 1 },
    { src: trayMockup1, alt: "Food Tray Mockup", rowSpan: 3, column: 1 },

    // Right column
    { src: image025, alt: "Al Mokhtar Bakery Exterior", rowSpan: 3, column: 2 },
    { src: image068, alt: "Al Mokhtar Bakery Counter", rowSpan: 4, column: 2 },
    { src: image069, alt: "Al Mokhtar Bakery Products", rowSpan: 3, column: 2 },
    { src: image073, alt: "Al Mokhtar Bakery Branding", rowSpan: 2, column: 2 },
    { src: trayMockup2, alt: "Food Tray Mockup 2", rowSpan: 3, column: 2 },
  ],
};

export function AlMokhtar() {
  return <ProjectLayout project={projectData} />;
}
