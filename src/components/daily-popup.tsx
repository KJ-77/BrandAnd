import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import aboutUs from "@/assets/about/about-us.webp";

export function DailyPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was shown today
    const lastShown = localStorage.getItem("popupLastShown");
    const today = new Date().toDateString();

    if (lastShown !== today) {
      // Show popup and update localStorage
      setIsOpen(true);
      localStorage.setItem("popupLastShown", today);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* No fixed height: the modal grows with its content and only scrolls once
          it would run past 85% of the screen, so nothing gets clipped. */}
      {/* overflow-hidden keeps the photo inside the modal's rounded corners */}
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-3xl max-h-[85vh] overflow-hidden overflow-y-auto p-0 bg-white border-gray-200">
        {/* items-center keeps the shorter of the two columns centred against the
            taller one, so the photo can stay at its own aspect ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Left Side - Studio portrait, shown whole rather than cropped to fill
              the column: the image sets its own height at its natural 4:3 */}
          <img
            src={aboutUs}
            alt="Brand& studio"
            className="w-full h-auto"
          />

          {/* Right Side - Text Content */}
          <div className="p-block sm:p-stack flex flex-col justify-between gap-block">
            <div>
              <DialogHeader>
                <DialogTitle className="text-2xl lg:text-3xl font-normal mb-block">
                  Welcome to Brand&
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-sm lg:text-base text-gray-700 leading-relaxed">
                Discover our latest projects and brand identity designs. We craft
                meaningful visual experiences that resonate with your audience and
                elevate your brand presence.
              </DialogDescription>
            </div>

            {/* Close button area - optional additional content */}
            <div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                Continue to site →
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
