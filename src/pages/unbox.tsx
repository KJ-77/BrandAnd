import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/unbox/banner.webp";
import brochureStationery from "@/assets/projects/unbox/brochure-stationery.webp";
import meetingRoom from "@/assets/projects/unbox/meeting-room.webp";
import businessCard from "@/assets/projects/unbox/business-card.webp";
import billboard from "@/assets/projects/unbox/billboard.webp";
import brochureWebsite from "@/assets/projects/unbox/brochure-website.webp";
import hangingTags from "@/assets/projects/unbox/hanging-tags.webp";
import openPlanOffice from "@/assets/projects/unbox/open-plan-office.webp";
import logoIllustration from "@/assets/projects/unbox/logo-illustration.webp";
// ==========================

const projectData: ProjectData = {
  slug: "unbox",
  title: "Unbox - Dubai",
  description: [
    "Unbox is an award-winning workspace in Business Bay, Dubai, and Brand& gave it an identity with the same idea at its centre: a box opened up, unfolded into planes and stairs that never quite sit where you expect them to.",
    "That geometry runs through everything — the faceted mark, the angular business cards and tags, the brochure and the environmental graphics — held together by a warm taupe and gold palette that carries the line \"Accomplish the Unthinkable\" from print to the building itself.",
  ],
  // instagram: "https://www.instagram.com/<handle>/",
  bannerImage: banner,
  images: [
    // Left column
    { src: brochureStationery, alt: "Unbox brochure and stationery suite", rowSpan: 5, column: 1 },
    { src: meetingRoom, alt: "Unbox branded meeting room", rowSpan: 2, column: 1 },
    { src: businessCard, alt: "Angular Unbox business cards", rowSpan: 5, column: 1 },
    { src: billboard, alt: "Unbox billboard outside the Business Bay building", rowSpan: 2, column: 1 },

    // Right column
    { src: brochureWebsite, alt: "Unbox brochure spread beside the website", rowSpan: 5, column: 2 },
    { src: hangingTags, alt: "Unbox pentagon hanging tags", rowSpan: 4, column: 2 },
    { src: openPlanOffice, alt: "Unbox open plan workspace", rowSpan: 2, column: 2 },
    { src: logoIllustration, alt: "Unbox unfolded box illustration", rowSpan: 5, column: 2 },
  ],
};

export function Unbox() {
  return <ProjectLayout project={projectData} />;
}
