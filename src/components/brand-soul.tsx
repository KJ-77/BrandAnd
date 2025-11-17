import riverboat from "@/assets/riverboat.webp";
import { useEffect, useRef, useState } from "react";

export function BrandSoul() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [paragraphVisible, setParagraphVisible] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const paragraphObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setParagraphVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    if (paragraphRef.current) {
      paragraphObserver.observe(paragraphRef.current);
    }

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      if (paragraphRef.current) {
        paragraphObserver.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full h-full flex items-center px-8 lg:px-16 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start w-full">
          {/* Left Column - Text Content */}
          <div className="w-full flex flex-col justify-start">
            <h2
              ref={titleRef}
              className={`text-3xl lg:text-4xl xl:text-5xl font-normal leading-tight tracking-tight mb-24 lg:mb-32 transition-all duration-1000 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              We build brands with soul
            </h2>
            <p
              ref={paragraphRef}
              className={`text-lg lg:text-xl xl:text-2xl leading-relaxed text-gray-700 transition-all duration-1000 ${
                paragraphVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              At Brand&, we see brands as living, breathing entities shaped by
              purpose, emotion, and connection. Just like people, they have
              values, personalities, and stories to tell. Our role is to uncover
              what makes each brand feel alive to give it a voice, a rhythm, and
              a soul that others can relate to. Through strategy and design, we
              humanize brands so they can inspire trust, spark emotion, and
              build genuine relationships that last beyond trends..
            </p>
          </div>

          {/* Right Column - Image */}
          <div
            className={`flex justify-center lg:justify-end items-start transition-all duration-1000 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <img
              src={riverboat}
              alt="Colorful garden illustration with riverboats"
              className="w-full h-[100vh] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
