import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoDark from "@/assets/logo-01.png";
import logoWhite from "@/assets/logo-white.png";

export function Navigation() {
  const location = useLocation();
  const isDarkPage = location.pathname === "/contact" || location.pathname === "/about";
  const isProjectPage = location.pathname.startsWith("/projects/");
  const isTransparent = isProjectPage;
  const logo = isDarkPage || isTransparent ? logoWhite : logoDark;

  return (
    //add fixed position to header to get sticky effect
    <header className={`top-0 left-0 right-0 z-50 ${
      isTransparent
        ? "bg-transparent absolute"
        : isDarkPage
          ? "bg-black backdrop-blur-sm"
          : "bg-white/95 backdrop-blur-sm"
    }`}>
      <nav className="w-full px-8 lg:px-[41.725px] py-12 lg:py-[43.394px] flex items-center font-['Titillium_Web']">
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
            className={`ml-6 px-12 py-6 text-lg ${
              isDarkPage || isTransparent
                ? "bg-transparent border-white text-white hover:bg-white/10"
                : "border-gray-300 hover:bg-gray-50"
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
