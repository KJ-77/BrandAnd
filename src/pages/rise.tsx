import { ProjectLayout, type ProjectData } from "@/components/project-layout";

// ===== PROJECT IMAGES =====
import banner from "@/assets/projects/rise/banner.webp";
import cupsCounter from "@/assets/projects/rise/cups-counter.webp";
import handHoldingBag from "@/assets/projects/rise/hand-holding-bag.webp";
import coffeePouch from "@/assets/projects/rise/coffee-pouch.webp";
import pastryBag from "@/assets/projects/rise/pastry-bag.webp";
import espressoCups from "@/assets/projects/rise/espresso-cups.webp";
import icedCoffee from "@/assets/projects/rise/iced-coffee.webp";
import shoppingBags from "@/assets/projects/rise/shopping-bags.webp";
import takeawayBag from "@/assets/projects/rise/takeaway-bag.webp";
// ==========================

const projectData: ProjectData = {
  slug: "rise",
  title: "Rise - Lebanon",
  description: [
    "For Rise, Brand& built a coffee identity around the moment the day turns over. A soft, diffused gradient shifts from blend to blend and from cup to cup, while one rounded wordmark holds the whole range together.",
    "The system was designed to be recognised at arm's length — on a takeaway cup, a pastry bag, a roast pouch or a paper bag crossing a counter — so the brand reads as a single warm gesture wherever it turns up.",
  ],
  // instagram: "https://www.instagram.com/<handle>/",
  bannerImage: banner,
  images: [
    // Left column
    { src: cupsCounter, alt: "Three Rise cups lined up on a café counter", rowSpan: 3, column: 1 },
    { src: handHoldingBag, alt: "Hand holding a Rise dark roast coffee bag", rowSpan: 5, column: 1 },
    { src: coffeePouch, alt: "Rise dark roast foil coffee pouch", rowSpan: 3, column: 1 },
    { src: pastryBag, alt: "Rise pastry bag with a croissant", rowSpan: 3, column: 1 },

    // Right column
    { src: espressoCups, alt: "Rise cups under an espresso machine", rowSpan: 3, column: 2 },
    { src: icedCoffee, alt: "Rise iced coffee cup", rowSpan: 5, column: 2 },
    { src: shoppingBags, alt: "Pair of Rise shopping bags", rowSpan: 4, column: 2 },
    { src: takeawayBag, alt: "Rise medium roast takeaway bag on a counter", rowSpan: 3, column: 2 },
  ],
};

export function Rise() {
  return <ProjectLayout project={projectData} />;
}
