import { Link } from "react-router-dom";
import iphoneMockup from "@/assets/iphone-mockup.webp";
import magazineMockup from "@/assets/magazine-mockup.webp";

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      {/* Top Section - Large Nav Items */}
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col items-center gap-8 lg:gap-12">
          {/* Projects | Image | Team Row */}
          <div className="flex items-center gap-3 lg:gap-4 lg:-ml-32">
            <Link
              to="/projects"
              className="text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight hover:opacity-70 transition-opacity uppercase"
            >
              PROJECTS
            </Link>
            <div className="w-20 h-20 lg:w-28 lg:h-28 overflow-hidden rounded-sm flex-shrink-0">
              <img
                src={iphoneMockup}
                alt="Projects"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <Link
              to="/team"
              className="text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight hover:opacity-70 transition-opacity uppercase"
            >
              TEAM
            </Link>
          </div>

          {/* Services Row */}
          <div className="flex items-center gap-3 lg:gap-4 lg:ml-48">
            <Link
              to="/services"
              className="text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight hover:opacity-70 transition-opacity uppercase"
            >
              SERVICES
            </Link>
            <div className="w-20 h-20 lg:w-28 lg:h-28 overflow-hidden rounded-sm flex-shrink-0">
              <img
                src={magazineMockup}
                alt="Services"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Email Us Button */}
          <div className="pt-6">
            <Link
              to="/contact"
              className="inline-block border border-white/30 px-10 py-3 text-sm tracking-widest hover:bg-white/10 transition-colors uppercase"
            >
              EMAIL US
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 lg:px-16">
        <div className="border-t border-white"></div>
      </div>

      {/* Bottom Section - Links & Social */}
      <div className="px-6 lg:px-16 pt-12 lg:pt-16 pb-20 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Stay Connected */}
          <div className="lg:col-span-4">
            <h3 className="text-3xl lg:text-4xl xl:text-7xl font-medium">
              stay connected
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 text-gray-400 text-base lg:text-xl lg:col-span-2 lg:col-start-9">
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
          <div className="flex flex-col gap-3 text-gray-400 text-base lg:text-xl lg:col-span-2 lg:col-start-11">
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
          {/* Footer Credit */}
          <div className="lg:col-span-3 lg:col-start-9 mt-8 lg:mt-12">
            <p className="text-sm lg:text-base text-white font-medium">designed by brand&</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
