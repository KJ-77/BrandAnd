import { useEffect, useRef, useState } from "react";

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

// ===== UPDATE THIS DATA FOR EACH PROJECT =====
const projectData: ProjectData = {
  title: "Project Name",
  description:
    "This is a brief description of the project. Replace this with actual project details.",
  bannerImage: "/path/to/banner-image.jpg",
  images: [
    // Example layout matching the reference image
    { src: "/path/to/image1.jpg", alt: "Image 1", rowSpan: 4, column: 1 },
    { src: "/path/to/image2.jpg", alt: "Image 2", rowSpan: 2, column: 2 },
    { src: "/path/to/image3.jpg", alt: "Image 3", rowSpan: 5, column: 1 },
    { src: "/path/to/image4.jpg", alt: "Image 4", rowSpan: 3, column: 2 },
    { src: "/path/to/image5.jpg", alt: "Image 5", rowSpan: 2, column: 2 },
    { src: "/path/to/image6.jpg", alt: "Image 6", rowSpan: 3, column: 1 },
    { src: "/path/to/image7.jpg", alt: "Image 7", rowSpan: 4, column: 2 },
  ],
};
// ============================================

export function ProjectTemplate() {
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
            <h1 className="text-4xl lg:text-6xl font-medium text-black mb-6">
              {projectData.title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              {projectData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Project Images Grid - Two Column Masonry Layout */}
      <section className="px-4 lg:px-16 xl:px-24 pb-20">
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
                    // Each rowSpan unit = ~150px (adjust as needed)
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
    </div>
  );
}
