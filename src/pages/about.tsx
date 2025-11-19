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
        className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20"
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

            {/* Blurred "about" Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                className="text-[13rem] lg:text-[14rem] xl:text-[15rem] font-light text-white lowercase tracking-tight"
                style={{ filter: "blur(7px)" }}
              >
                about
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Branding Philosophy Section */}
      <section ref={philosophyRef} className="min-h-screen py-20">
        {/* Split Layout: Left (Image) and Right (Text) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-16 xl:px-80 min-h-[150vh]">
          {/* Left Side - Chain Image at Bottom */}
          <div
            className={`relative flex items-end justify-start transition-all duration-1000 delay-200 ${
              isPhilosophyVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="w-full max-w-[280px]">
              <img
                src={chainImage}
                alt="Chain"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side - Three Paragraphs with Titles */}
          <div className="space-y-52 self-start">
            {/* Paragraph 1 */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isPhilosophyVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <h3 className="text-base lg:text-xl text-gray-300 mb-6 tracking-wide">
                Our Story
              </h3>
              <p className="text-xl lg:text-2xl text-white leading-relaxed w-[110%]">
                Founded by <span className="font-bold">Lama Ramadan</span>,
                Brand& is a Beirut-based branding studio driven by the power of
                ideas that move people. With over a decade of experience across
                industries, we've helped shape brands that honor their roots
                while thriving in modern markets.
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
              <h3 className="text-base lg:text-xl text-gray-300 mb-6 tracking-wide">
                BRANDING PHILOSOPHY
              </h3>
              <p className="text-3xl lg:text-4xl font-medium text-white leading-tight">
                Our approach goes beyond visuals, we uncover what makes each
                brand truly distinct and translate it into a living identity
                that inspires connection.
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
              <h3 className="text-base lg:text-xl text-gray-300 mb-6 tracking-wide">
                Purpose
              </h3>
              <p className="text-xl  text-white leading-relaxed w-full">
                We believe in{" "}
                <span className="font-bold">clarity, honesty, and craft.</span>{" "}
                <br />
                Every project beginswith deep understanding of culture,
                behavior, and emotion before it becomes design. We collaborate
                closely with our clients, ensuring each brand we create feels
                authentic, relevant, and beautifully timeless.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
