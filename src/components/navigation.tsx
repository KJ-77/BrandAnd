import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-01.png";

export function Navigation() {
  return (
    //add fixed position to header to get sticky effect
    <header className="top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="w-full px-8 lg:px-12 py-12 lg:py-16 flex items-center">
        {/* Logo */}
        <Link to="/" className="hover:opacity-80 transition-opacity mr-auto">
          <img src={logo} alt="Brand& Logo" className="h-12 lg:h-14 w-auto" />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 lg:gap-10 pr-8 lg:pr-12">
          <Link
            to="/portfolio"
            className="text-xl lg:text-2xl font-normal hover:opacity-60 transition-opacity"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-xl lg:text-2xl font-normal hover:opacity-60 transition-opacity"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-xl lg:text-2xl font-normal hover:opacity-60 transition-opacity"
          >
            Contact
          </Link>

          {/* Request Button */}
          <Button
            variant="outline"
            className="ml-6 px-12 py-6 text-lg border-gray-300 hover:bg-gray-50"
            asChild
          >
            <Link to="/request">REQUEST</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
