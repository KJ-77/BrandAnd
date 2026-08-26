import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/mind-clinics/banner.webp";
import clinicWindow from "@/assets/projects/mind-clinics/clinic-window.webp";
import stationeryFolder from "@/assets/projects/mind-clinics/stationery-folder.webp";
import feelGoodKit from "@/assets/projects/mind-clinics/feel-good-kit.webp";
import brandedCaps from "@/assets/projects/mind-clinics/branded-caps.webp";
import trifoldBrochure from "@/assets/projects/mind-clinics/trifold-brochure.webp";
import notebook from "@/assets/projects/mind-clinics/notebook.webp";
import hoodieLabel from "@/assets/projects/mind-clinics/hoodie-label.webp";
import brandedMugs from "@/assets/projects/mind-clinics/branded-mugs.webp";
// ==========================

const projectData: ProjectData = {
  slug: "mind-clinics",
  title: "MIND Clinics - Beirut, Lebanon",
  description:
    "Brand& designed the logo for MIND, a mental health institution recognized for its longevity and excellence. The identity combines bold typography with a distinctive red color palette, creating a confident and memorable visual presence. The cohesive design reinforces MIND's established reputation while bringing a contemporary, recognizable character to the brand.",
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: clinicWindow, alt: "MIND Clinics window signage", rowSpan: 3, column: 1 },
    { src: stationeryFolder, alt: "MIND Clinics folder, letterhead and business card", rowSpan: 3, column: 1 },
    { src: feelGoodKit, alt: "MIND Clinics Feel Good Kit packaging", rowSpan: 2, column: 1 },
    { src: brandedCaps, alt: "MIND Clinics embroidered caps", rowSpan: 2, column: 1 },

    // Right column
    { src: trifoldBrochure, alt: "MIND Clinics trifold brochure", rowSpan: 3, column: 2 },
    { src: notebook, alt: "MIND Clinics branded notebook", rowSpan: 3, column: 2 },
    { src: hoodieLabel, alt: "MIND Clinics woven label on a hoodie", rowSpan: 2, column: 2 },
    { src: brandedMugs, alt: "MIND Clinics branded mugs", rowSpan: 2, column: 2 },
  ],
};

export function MindClinics() {
  return <ProjectLayout project={projectData} />;
}
