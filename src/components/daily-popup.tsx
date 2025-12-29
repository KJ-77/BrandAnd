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
      <DialogContent className="w-[60vw] h-[35vh] min-h-[300px] p-0 overflow-hidden bg-white border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
          {/* Left Side - Image Placeholder */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-full flex items-center justify-center">
            {/* Placeholder for image */}
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">🖼️</div>
              <p className="text-sm">Image Placeholder</p>
              <p className="text-xs mt-2 px-4">
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
          <div className="p-8 lg:p-12 flex flex-col justify-between h-full">
            <div>
              <DialogHeader>
                <DialogTitle className="text-3xl lg:text-4xl font-normal mb-6">
                  Welcome to Brand&
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Discover our latest projects and brand identity designs. We craft
                meaningful visual experiences that resonate with your audience and
                elevate your brand presence.
              </DialogDescription>
            </div>

            {/* Close button area - optional additional content */}
            <div className="mt-8">
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
