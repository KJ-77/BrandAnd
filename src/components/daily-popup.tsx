import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
      <DialogContent className="w-[calc(100%-2rem)] sm:max-w-3xl max-h-[85vh] overflow-y-auto p-0 bg-white border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left Side - Image Placeholder.
              Fixed aspect on mobile, full column height on desktop, so the
              image is always fully contained instead of being cropped. */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 aspect-[16/9] md:aspect-auto md:h-full flex items-center justify-center p-tight">
            {/* Placeholder for image */}
            <div className="text-center text-gray-400">
              <div className="text-4xl md:text-6xl mb-2 md:mb-4">🖼️</div>
              <p className="text-sm">Image Placeholder</p>
              <p className="text-xs mt-2">
                Replace with actual image in src/components/daily-popup.tsx
              </p>
            </div>
            {/* When you have an image, replace the placeholder div above with: */}
            {/* <img
              src="/path-to-your-image.jpg"
              alt="Welcome"
              className="w-full h-full object-cover"
            /> */}
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
