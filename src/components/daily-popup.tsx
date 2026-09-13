import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
// The welcome image is the Safran du Liban hero shot - shared with that case
// study rather than duplicated, so swapping it here is a one-line import change.
import welcomeImage from "@/assets/projects/safran-du-liban/saffron-tins.webp";

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
        {/* Default `items-stretch`: both columns take the height of the taller
            one, so the photo fills its half instead of floating in white space */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side - the photo. On mobile it is a full-width band at the
              image's own 3:2, so nothing is cropped; from md up the wrapper is
              stretched to the height of the copy column and the image covers it,
              which is the only way two columns of different content can line up. */}
          <div className="aspect-[3/2] md:aspect-auto">
            <img
              src={welcomeImage}
              alt="Safran du Liban saffron tins"
              className="w-full h-full object-cover"
            />
          </div>

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
