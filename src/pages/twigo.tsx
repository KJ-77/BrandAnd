import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/twigo/banner.webp";
import billboard from "@/assets/projects/twigo/billboard.webp";
import airplaneWindow from "@/assets/projects/twigo/airplane-window.webp";
import digitalScreen from "@/assets/projects/twigo/digital-screen.webp";
import airportBanner from "@/assets/projects/twigo/airport-banner.webp";
import phonePocket from "@/assets/projects/twigo/phone-pocket.webp";
import officePoster from "@/assets/projects/twigo/office-poster.webp";
import appScreen from "@/assets/projects/twigo/app-screen.webp";
// ==========================

const projectData: ProjectData = {
  slug: "twigo",
  title: "Twigo - Global",
  description: [
    "Introducing Twigo. A modern telecom brand built for a borderless world.",
    "At Brand&, we developed a visual identity inspired by movement, simplicity, and seamless global connectivity — creating a brand that feels as effortless as the experience it delivers.",
    "From strategy and identity to digital assets, illustrations, campaigns, and branded touchpoints, every element was crafted to move with the traveler.",
    "Twigo. Wherever you go.",
  ],
  bannerImage: banner,
  // instagram: "https://www.instagram.com/<handle>/",
  images: [
    // Left column
    { src: billboard, alt: "Twigo billboard campaign", rowSpan: 5, column: 1 },
    { src: airplaneWindow, alt: "Twigo illustration framed by an airplane window", rowSpan: 5, column: 1 },
    { src: digitalScreen, alt: "Twigo campaign on a digital screen", rowSpan: 3, column: 1 },
    { src: airportBanner, alt: "Twigo hanging banner in an airport terminal", rowSpan: 5, column: 1 },

    // Right column
    { src: phonePocket, alt: "Twigo app on a phone in a pocket", rowSpan: 5, column: 2 },
    { src: officePoster, alt: "Twigo wall poster in an office", rowSpan: 5, column: 2 },
    { src: appScreen, alt: "Twigo app onboarding screen", rowSpan: 5, column: 2 },
  ],
};

export function Twigo() {
  return <ProjectLayout project={projectData} />;
}
