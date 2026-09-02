import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== IMPORT YOUR PROJECT IMAGES HERE =====
// import banner from "@/assets/projects/projectX/banner.webp";
// import image1 from "@/assets/projects/projectX/image1.webp";
// import image2 from "@/assets/projects/projectX/image2.webp";
// ===========================================

// ===== UPDATE THIS DATA FOR EACH PROJECT =====
const projectData: ProjectData = {
  // Must match the slug registered in src/lib/projects.ts
  slug: "project-slug",
  title: "Project Name",
  // A string, or an array of strings for a multi-paragraph write-up
  description:
    "This is a brief description of the project. Replace this with actual project details.",
  bannerImage: "", // Use the imported banner image: bannerImage: banner,
  // Optional - the follow button is hidden when this is left out
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column (column: 1) and right column (column: 2).
    // Images always render at their natural aspect ratio; rowSpan only shapes
    // the placeholder held while the file loads, so match the image:
    //   landscape 3:2 -> 2   landscape 4:3 -> 3   square -> 4   portrait -> 5
    // { src: image1, alt: "Image 1", rowSpan: 4, column: 1 },
    // { src: image2, alt: "Image 2", rowSpan: 2, column: 2 },
  ],
};
// =============================================

export function ProjectTemplate() {
  return <ProjectLayout project={projectData} />;
}
