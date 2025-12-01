import { useEffect, useRef, useState } from "react";
import { ProjectNavigation } from "@/components/project-navigation";

// Import images
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

// Type definitions for project data
interface ProjectImage {
  src: string;
  alt: string;
  rowSpan: number; // How many grid rows this image should span (e.g., 2, 3, 4)
  column: 1 | 2; // Which column: 1 for left, 2 for right
}

interface ProjectData {
  title: string;
  description: string;
  bannerImage: string;
  images: ProjectImage[];
}

// ===== AL MOKHTAR PROJECT DATA =====
const projectData: ProjectData = {
  title: "Al Mukhtar - UAE",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  bannerImage: banner1,
  images: [
    // Left column
    {
      src: image001,
      alt: "Al Mokhtar Bakery Interior",
      rowSpan: 4,
      column: 1,
    },
    {
      src: image060,
      alt: "Al Mokhtar Bakery Display",
      rowSpan: 3,
      column: 1,
    },
    {
      src: image071,
      alt: "Al Mokhtar Bakery Detail",
      rowSpan: 4,
      column: 1,
    },
    {
      src: trayMockup1,
      alt: "Food Tray Mockup",
      rowSpan: 3,
      column: 1,
    },

    // Right column
    {
      src: image025,
      alt: "Al Mokhtar Bakery Exterior",
      rowSpan: 3,
      column: 2,
    },
    {
      src: image068,
      alt: "Al Mokhtar Bakery Counter",
      rowSpan: 4,
      column: 2,
    },
    {
      src: image069,
      alt: "Al Mokhtar Bakery Products",
      rowSpan: 3,
      column: 2,
    },
    {
      src: image073,
      alt: "Al Mokhtar Bakery Branding",
      rowSpan: 2,
      column: 2,
    },
    {
      src: trayMockup2,
      alt: "Food Tray Mockup 2",
      rowSpan: 3,
      column: 2,
    },
  ],
};
// ============================================

export function AlMokhtar() {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  // Separate images by column
  const leftColumnImages = projectData.images.filter((img) => img.column === 1);
  const rightColumnImages = projectData.images.filter(
    (img) => img.column === 2
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Banner and Project Info Section - Full Viewport */}
      <section className="min-h-screen flex flex-col">
        {/* Banner Image - Behind Navbar */}
        <div className="relative h-[45vh]">
          <img
            src={projectData.bannerImage}
            alt={projectData.title}
            className="w-full h-full object-cover"
          />
          {/* Slight overlay for better visual */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Project Info - Centered Below Banner */}
        <div className="flex-1 flex items-center justify-center px-4 lg:px-16 xl:px-24">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl lg:text-4xl font-medium text-black mb-6">
              {projectData.title}
            </h1>
            <div className = "h-6"></div>
            <p className="text-lg lg:text-lg text-gray-700 leading-relaxed">
              {projectData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Images Grid - Two Column Masonry Layout */}
      <section ref={contentRef} className="px-4 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {leftColumnImages.map((image, index) => (
                <div
                  key={`left-${index}`}
                  className={`transition-all duration-1000 delay-${
                    index * 100
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    // Use rowSpan to determine approximate height
                    // Each rowSpan unit = ~150px
                    minHeight: `${image.rowSpan * 150}px`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {rightColumnImages.map((image, index) => (
                <div
                  key={`right-${index}`}
                  className={`transition-all duration-1000 delay-${
                    (index + leftColumnImages.length) * 100
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    // Use rowSpan to determine approximate height
                    minHeight: `${image.rowSpan * 150}px`,
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation nextProject="/right" />
    </div>
  );
}
