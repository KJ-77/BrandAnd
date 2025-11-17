import { Link } from "react-router-dom";
import iphoneMockup from "@/assets/iphone-mockup.webp";
import magazineMockup from "@/assets/magazine-mockup.webp";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Top Section - Large Nav Items */}
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="space-y-12">
          {/* Projects Row */}
          <div className="flex items-center gap-6">
            <Link
              to="/projects"
              className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight hover:opacity-70 transition-opacity uppercase"
            >
              PROJECTS
            </Link>
            <div className="w-20 h-20 lg:w-24 lg:h-24 overflow-hidden rounded-sm flex-shrink-0">
              <img
                src={iphoneMockup}
                alt="Projects"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Team Row */}
          <div className="flex items-center gap-6">
            <Link
              to="/team"
              className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight hover:opacity-70 transition-opacity uppercase"
            >
              TEAM
            </Link>
          </div>

          {/* Services Row */}
          <div className="flex items-center gap-6">
            <Link
              to="/services"
              className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight hover:opacity-70 transition-opacity uppercase"
            >
              SERVICES
            </Link>
            <div className="w-20 h-20 lg:w-24 lg:h-24 overflow-hidden rounded-sm flex-shrink-0">
              <img
                src={magazineMockup}
                alt="Services"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Email Us Button */}
          <div className="pt-8">
            <Link
              to="/contact"
              className="inline-block border border-white/30 px-8 py-3 text-sm tracking-wider hover:bg-white/10 transition-colors uppercase"
            >
              EMAIL US
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10"></div>

      {/* Bottom Section - Links & Social */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Stay Connected */}
          <div>
            <h3 className="text-xl lg:text-2xl font-light mb-4">
              stay connected
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2 text-gray-400">
            <Link to="/" className="hover:text-white transition-colors">
              home
            </Link>
            <Link to="/projects" className="hover:text-white transition-colors">
              projects
            </Link>
            <Link to="/about" className="hover:text-white transition-colors">
              about
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2 text-gray-400">
            <a
              href="mailto:hello@brandandco.com"
              className="hover:text-white transition-colors"
            >
              email
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              linkedin
            </a>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-gray-500">designed by brand&</p>
        </div>
      </div>
    </footer>
  );
}
