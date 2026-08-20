import { Instagram } from "lucide-react";
import logo from "@/assets/logo-01.png";

export function ComingSoon() {
  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden flex flex-col">
      {/* Soft background wash — keeps the airy editorial feel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.04),transparent_60%)]"
      />

      {/* Center stage */}
      <section className="relative z-10 flex-1 flex items-center justify-center px-6 lg:px-12 py-16 pt-24 lg:pt-16">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-10 lg:gap-16">
          {/* Left copy */}
          <div className="text-center lg:text-right space-y-6">
            <p className="text-xs lg:text-sm tracking-[0.3em] uppercase text-neutral-500">
              Something thoughtful
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight font-normal">
              Coming
              <br />
              <em className="not-italic">soon.</em>
            </h1>
          </div>

          {/* Centerpiece — the actual brand logo, oversized so its ampersand is the focal point */}
          <div className="relative flex items-center justify-center">
            <img
              src={logo}
              alt="Brand&"
              className="block w-[18rem] lg:w-[28rem] xl:w-[34rem] h-auto select-none"
              draggable={false}
            />
            {/* Slow shimmer line under the logo */}
            <span
              aria-hidden
              className="absolute -bottom-4 lg:-bottom-6 h-px w-32 lg:w-48 bg-gradient-to-r from-transparent via-black/40 to-transparent shimmer"
            />
          </div>

          {/* Right copy */}
          <div className="text-center lg:text-left space-y-6 max-w-sm lg:max-w-none mx-auto">
            <p className="text-base lg:text-lg leading-relaxed text-neutral-700">
              We're putting the finishing touches on a home that does our work
              justice — built for brands that stand for something.
            </p>
            <p className="text-sm lg:text-base text-neutral-500">
              In the meantime, follow along on Instagram for new work and quiet
              announcements.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-black/80 px-7 py-3 text-xs tracking-[0.25em] uppercase hover:bg-black hover:text-white transition-colors"
            >
              <Instagram size={16} />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer line */}
      <footer className="relative z-10 px-6 lg:px-12 pb-8 lg:pb-10">
        <div className="border-t border-black/10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-3 text-xs tracking-widest uppercase text-neutral-500">
          <span>Brand&amp; — Beirut</span>
          <span>Site relaunching shortly</span>
        </div>
      </footer>

      {/* Local keyframes for the shimmer — kept here so the page is self-contained */}
      <style>{`
        @keyframes brandand-shimmer {
          0%   { transform: translateX(-20%); opacity: 0.2; }
          50%  { opacity: 1; }
          100% { transform: translateX(20%); opacity: 0.2; }
        }
        .shimmer {
          animation: brandand-shimmer 4.5s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

export default ComingSoon;
