import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logoDark from "@/assets/logo-01.png";
import logoWhite from "@/assets/logo-white.png";

export function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isDarkPage = location.pathname === "/contact" || location.pathname === "/about";
  const isProjectPage = location.pathname.startsWith("/projects/");
  const isTransparent = isProjectPage;
  const logo = isDarkPage || isTransparent ? logoWhite : logoDark;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    //add fixed position to header to get sticky effect
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isTransparent
        ? isScrolled
          ? "bg-gray-900/60 backdrop-blur-sm shadow-lg shadow-white/10 border-b border-white/20"
          : "bg-transparent"
        : isDarkPage
          ? isScrolled
            ? "bg-gray-900/60 backdrop-blur-sm shadow-lg shadow-white/10 border-b border-white/20"
            : "bg-black backdrop-blur-sm"
          : isScrolled
            ? "bg-gray-100/60 backdrop-blur-sm shadow-lg shadow-black/5 border-b border-gray-200/50"
            : "bg-white/95 backdrop-blur-sm"
    }`}>
      <nav className={`w-full px-8 lg:px-[41.725px] flex items-center transition-all duration-500 ${
        isScrolled ? "py-4 lg:py-5" : "py-12 lg:py-[43.394px]"
      }`}>
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity mr-auto">
          <img src={logo} alt="Brand& Logo" className="h-12 lg:h-14 w-auto" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 lg:gap-10 pr-8 lg:pr-12">
          <Link
            to="/portfolio"
            className={`text-xl lg:text-2xl font-normal hover:opacity-60 transition-opacity ${
              isDarkPage || isTransparent ? "text-white" : "text-black"
            }`}
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className={`text-xl lg:text-2xl font-normal hover:opacity-60 transition-opacity ${
              isDarkPage || isTransparent ? "text-white" : "text-black"
            }`}
          >
            About
          </Link>
          <Link
            to="/contact"
            className={`text-xl lg:text-2xl font-normal hover:opacity-60 transition-opacity ${
              isDarkPage || isTransparent ? "text-white" : "text-black"
            }`}
          >
            Contact
          </Link>

          {/* Request Button */}
          <Button
            variant="outline"
            className={`ml-6 px-12 py-6 text-lg transition-all duration-500 ${
              isDarkPage || isTransparent
                ? isScrolled
                  ? "bg-white text-black border-white hover:bg-white/90"
                  : "bg-gray-700/40 backdrop-blur-md border-white/40 text-white hover:bg-gray-700/60 shadow-lg shadow-white/20 ring-1 ring-white/30"
                : isScrolled
                  ? "bg-white border-gray-300 hover:bg-gray-50"
                  : "bg-gradient-to-br from-gray-200/50 to-gray-300/50 backdrop-blur-lg border-gray-300/50 hover:from-gray-200/70 hover:to-gray-300/70 shadow-xl shadow-gray-400/20 ring-1 ring-gray-300/40"
            }`}
            asChild
          >
            <Link to="/request">REQUEST</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
