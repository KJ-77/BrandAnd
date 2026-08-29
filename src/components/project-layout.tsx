import { useEffect, useRef, useState } from "react";
import { Instagram } from "lucide-react";
import { ProjectNavigation } from "@/components/project-navigation";
import { getProjectNeighbors } from "@/lib/projects";

export interface ProjectImage {
  src: string;
  alt: string;
  /** Vertical space reserved for the image before it loads (rowSpan * 150px). */
  rowSpan: number;
  /** Which masonry column the image belongs to: 1 for left, 2 for right. */
  column: 1 | 2;
}

export interface ProjectData {
  /** Must match a slug in src/lib/projects.ts - it drives the previous/next arrows. */
  slug: string;
  title: string;
  /** A single paragraph, or an array of paragraphs for longer write-ups. */
  description: string | string[];
  bannerImage: string;
  images: ProjectImage[];
  /** Full Instagram URL. The follow button is hidden when this is omitted. */
  instagram?: string;
}

interface ProjectLayoutProps {
  project: ProjectData;
}

/**
 * Shared layout for every project case study: a wide banner, the project write-up,
 * a two-column masonry image grid that fades in on scroll, and previous/next arrows.
 * Individual project pages only supply the data - see src/pages/project-template.tsx.
 */
export function ProjectLayout({ project }: ProjectLayoutProps) {
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

    // Copy the ref into the effect scope so cleanup unobserves the same element
    const element = contentRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const paragraphs = Array.isArray(project.description)
    ? project.description
    : [project.description];

  // Separate images by column
  const leftColumnImages = project.images.filter((img) => img.column === 1);
  const rightColumnImages = project.images.filter((img) => img.column === 2);

  const { previous, next } = getProjectNeighbors(project.slug);

  // Shared renderer for both columns - `delayIndex` staggers the fade-in so the
  // right column continues the sequence rather than restarting it
  const renderImage = (
    image: ProjectImage,
    key: string,
    delayIndex: number
  ) => (
    <div
      key={key}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{
        // Reserve roughly the right height up front to limit layout shift.
        // Each rowSpan unit = ~150px
        minHeight: `${image.rowSpan * 150}px`,
        transitionDelay: `${delayIndex * 100}ms`,
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      {/* Banner and Project Info Section - Full Viewport */}
      <section className="min-h-screen flex flex-col">
        {/* Banner Image - Behind Navbar */}
        <div className="relative h-[45vh]">
          <img
            src={project.bannerImage}
            alt={project.title}
            loading="eager"
            className="w-full h-full object-cover"
          />
          {/* Slight overlay for better visual */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Project Info - Centered Below Banner */}
        <div className="flex-1 flex items-center justify-center px-6 lg:px-16 xl:px-24 py-section lg:py-section-lg">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl lg:text-4xl font-normal text-black mb-block">
              {project.title}
            </h1>
            <div className="space-y-tight">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg lg:text-lg text-gray-700 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            {project.instagram && (
              <div className="mt-block">
                <a
                  href={project.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors rounded-none"
                >
                  <Instagram size={20} />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Images Grid - Two Column Masonry Layout */}
      <section ref={contentRef} className="px-6 lg:px-16 xl:px-24 pb-section lg:pb-section-lg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              {leftColumnImages.map((image, index) =>
                renderImage(image, `left-${index}`, index)
              )}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              {rightColumnImages.map((image, index) =>
                renderImage(
                  image,
                  `right-${index}`,
                  index + leftColumnImages.length
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <ProjectNavigation previousProject={previous} nextProject={next} />
    </div>
  );
}
