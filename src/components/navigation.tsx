import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight hover:opacity-80 transition-opacity">
          brand<span className="font-light">&</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          <Link
            to="/portfolio"
            className="text-base font-normal hover:opacity-60 transition-opacity"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-base font-normal hover:opacity-60 transition-opacity"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-base font-normal hover:opacity-60 transition-opacity"
          >
            Contact
          </Link>

          {/* Request Button */}
          <Button
            variant="outline"
            className="ml-4 px-8 py-2 border-gray-300 hover:bg-gray-50"
            asChild
          >
            <Link to="/request">REQUEST</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
