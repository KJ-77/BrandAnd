import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { carouselProjects } from "@/lib/projects";

/**
 * Horizontally scrollable strip of project cards for the bottom of the portfolio
 * page. Built on native scroll-snap rather than a carousel library: it stays
 * touch/trackpad swipeable and keyboard accessible with zero dependencies.
 */
export function ProjectCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Fade the section in on scroll, matching the rest of the portfolio page
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Keep the arrows in sync with how far the track has been scrolled
  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 1);
    // 1px of slack absorbs sub-pixel rounding at the end of the track
    setCanScrollRight(track.scrollLeft < maxScroll - 1);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  // Scroll exactly one card per arrow click, whatever the current breakpoint is
  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | undefined;
    if (!track || !firstCard) return;

    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    track.scrollBy({
      left: direction * (firstCard.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div ref={sectionRef} className="w-full px-6 md:px-[10%] pb-section lg:pb-section-lg">
      {/* Heading + arrows */}
      <div
        className={`flex items-end justify-between mb-block transition-all duration-1500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-normal">MORE PROJECTS</h2>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            disabled={!canScrollLeft}
            aria-label="Previous projects"
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 transition-all enabled:hover:border-black enabled:hover:bg-black enabled:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            disabled={!canScrollRight}
            aria-label="Next projects"
            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 transition-all enabled:hover:border-black enabled:hover:bg-black enabled:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Scroll-snap track - the native scrollbar is hidden, arrows and swipe drive it */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className={`flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden transition-all duration-1500 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {carouselProjects.map((project) => (
          <Link
            key={project.slug}
            to={project.path}
            className="group flex-shrink-0 snap-start w-[78%] sm:w-[46%] lg:w-[31%]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="py-tight md:py-6 text-center bg-white">
              <p className="text-base">{project.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
