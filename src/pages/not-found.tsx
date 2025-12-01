import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

export function NotFoundPage() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex items-center justify-center px-4">
      <div
        ref={sectionRef}
        className={`text-center max-w-2xl transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* 404 Large Number */}
        <h1 className="text-[12rem] lg:text-[16rem] font-light text-gray-300 leading-none tracking-tighter">
          404
        </h1>

        {/* Message */}
        <div className="space-y-6 -mt-8">
          <h2 className="text-3xl lg:text-5xl font-normal text-gray-900 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              variant="outline"
              className="px-8 py-6 text-base border-gray-300 hover:bg-gray-50 transition-all"
              asChild
            >
              <Link to="/">Back to Home</Link>
            </Button>
            <Button
              variant="outline"
              className="px-8 py-6 text-base border-gray-300 hover:bg-gray-50 transition-all"
              asChild
            >
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 text-gray-400">
          <p className="text-sm">
            Or contact us if you think this is an error
          </p>
        </div>
      </div>
    </div>
  );
}
