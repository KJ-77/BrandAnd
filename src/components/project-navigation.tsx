import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectNavigationProps {
  previousProject?: string;
  nextProject?: string;
}

export function ProjectNavigation({ previousProject, nextProject }: ProjectNavigationProps) {
  return (
    <div className="w-full bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {/* Left Arrow - Previous Project */}
          {previousProject ? (
            <Link
              to={previousProject}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-all"
            >
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                <ChevronLeft className="w-6 h-6" />
              </div>
              <span className="text-sm font-medium hidden sm:inline">Previous Project</span>
            </Link>
          ) : (
            <div className="w-12 h-12"></div> // Spacer when no previous project
          )}

          {/* Right Arrow - Next Project */}
          {nextProject ? (
            <Link
              to={nextProject}
              className="group flex items-center gap-2 text-gray-600 hover:text-black transition-all"
            >
              <span className="text-sm font-medium hidden sm:inline">Next Project</span>
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-black group-hover:bg-black group-hover:text-white transition-all">
                <ChevronRight className="w-6 h-6" />
              </div>
            </Link>
          ) : (
            <div className="w-12 h-12"></div> // Spacer when no next project
          )}
        </div>
      </div>
    </div>
  );
}
