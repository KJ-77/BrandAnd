import { useEffect, useRef, useState } from "react";
import upperShot from "@/assets/about/upper-shot.webp";
import chainImage from "@/assets/about/chain.png";

export function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPhilosophyVisible, setIsPhilosophyVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPhilosophyVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (philosophyRef.current) {
      observer.observe(philosophyRef.current);
    }

    return () => {
      if (philosophyRef.current) {
        observer.unobserve(philosophyRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section with Image and Blurred Text */}
      <section
        ref={sectionRef}
        className="min-h-screen flex items-center justify-center px-6 lg:px-8 py-section lg:py-section-lg"
      >
        <div
          className={`relative max-w-lg w-full transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Portrait Image */}
          <div className="relative aspect-square">
            <img
              src={upperShot}
              alt="About"
              className="w-full h-full object-cover"
            />

            {/* Dimming Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Blurred "about" Text Overlay.
                min(38vw, 13rem) keeps the word inside the photo on phones - at a
                fixed 13rem it rendered ~470px wide and ran off the screen. */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                className="text-[min(38vw,13rem)] lg:text-[14rem] xl:text-[15rem] font-light text-white lowercase tracking-tight"
                style={{ filter: "blur(7px)" }}
              >
                about
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Philosophy Section */}
      <section ref={philosophyRef} className="py-section lg:py-section-lg">
        {/* Split Layout: Left (Image) and Right (Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack lg:gap-4 px-6 lg:px-16 xl:px-80">
          {/* Left Side - Chain Image at Bottom */}
          <div
            className={`relative flex items-end justify-start transition-all duration-1000 delay-200 ${
              isPhilosophyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-full max-w-[180px] lg:max-w-[280px]">
              <img
                src={chainImage}
                alt="Chain"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Three Paragraphs with Titles */}
          <div className="space-y-stack self-start">
            {/* Paragraph 1 */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isPhilosophyVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h3 className="text-base lg:text-xl text-gray-300 mb-block tracking-wide font-extrabold">
                Our Story
              </h3>
              <p className="text-xl lg:text-2xl text-white leading-relaxed w-full lg:w-[110%]">
                Founded by <span className="font-bold">Lama Ramadan</span>, Brand& grew from her belief 
                that a brand is more than what it looks like it is a story, a point of view, and a feeling 
                that stays with people.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div
              className={`transition-all duration-1000 delay-500 ${
                isPhilosophyVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h3 className="text-base lg:text-xl text-gray-300 mb-block tracking-wide font-extrabold">
                BRANDING PHILOSOPHY
              </h3>
              <p className="text-3xl lg:text-4xl font-normal font-serif text-white leading-tight">
                With over a decade of experience in branding and creative direction, Lama has worked across 
                industries and cultures, helping businesses discover what makes them distinct and translating 
                those ideas into brands with clarity, character, and purpose. Her approach brings together 
                strategy and intuition, always looking beyond trends to understand the people, stories, and 
                ambitions behind a brand.
              </p>
            </div>

            {/* Paragraph 3 */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isPhilosophyVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h3 className="text-base lg:text-xl text-gray-300 mb-block tracking-wide font-extrabold">
                Purpose
              </h3>
              <p className="text-xl  text-white leading-relaxed w-full">
                We believe in{" "}
                <span className="font-bold">clarity, honesty, and craft.</span>{" "}
                <br />
                At Brand& branding begins with listening; understanding where a brand comes from, 
                what it stands for, and where it wants to go. From there, she builds identities 
                that respect the roots of a business while giving it the confidence to evolve.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
