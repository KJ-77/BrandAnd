import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ProjectCarousel } from "@/components/project-carousel";
import AlMukhtarImage from "@/assets/portfolio/AlMukhtar.webp";
import FourFlagsImage from "@/assets/portfolio/Four_Flags_Mockup.webp";
import BoxesMockupImage from "@/assets/portfolio/boxes-mockup.webp";
import CupsMockupImage from "@/assets/portfolio/Cups-Mockup.webp";
import MagazineMockup2Image from "@/assets/portfolio/Magazine-Mockup2.webp";
import FoodMockupImage from "@/assets/portfolio/Food-Mockup.webp";
import BoxesMockup2Image from "@/assets/portfolio/boxes-mockup-2.webp";

interface PortfolioItem {
  id: number;
  image: string;
  title?: string;
  link: string;
  /** Height the tile takes from the md breakpoint up - below that every tile
   *  is the same h-[50vh] card so the page reads as one even stack on phones. */
  desktopHeight: string;
  /** Tailwind delay class used to stagger the tile's fade-in. */
  delay?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: AlMukhtarImage,
    title: "Al Mukhtar - UAE",
    link: "/projects/al-mokhtar",
    desktopHeight: "md:h-screen",
  },
  {
    id: 2,
    image: FourFlagsImage,
    title: "Valor Collective - London UK",
    link: "/projects/valor",
    desktopHeight: "md:h-[50vh]",
    delay: "delay-300",
  },
];

const secondRowItems: PortfolioItem[] = [
  {
    id: 3,
    image: BoxesMockupImage,
    title: "Dimmi - Global",
    link: "/",
    desktopHeight: "md:h-[35vh]",
  },
  {
    id: 4,
    image: CupsMockupImage,
    title: "Rise - Lebanon",
    link: "/",
    desktopHeight: "md:h-[35vh]",
  },
  {
    id: 5,
    image: MagazineMockup2Image,
    title: "Unbox - Dubai",
    link: "/",
    desktopHeight: "md:h-[35vh]",
  },
];

const thirdRowItems: PortfolioItem[] = [
  {
    id: 6,
    image: FoodMockupImage,
    title: "Lovin'thyme - UK",
    link: "/projects/lovin-thyme",
    desktopHeight: "md:h-[50vh]",
    delay: "delay-300",
  },
  {
    id: 7,
    image: BoxesMockup2Image,
    title: "Mind Clinics - Lebanon",
    link: "/projects/mind-clinics",
    desktopHeight: "md:h-screen",
  },
];

/**
 * One portfolio thumbnail plus its caption. Mobile height is fixed so the
 * stacked layout has evenly sized tiles; desktop keeps the asymmetric grid.
 */
const PortfolioTile = ({
  item,
  isVisible,
}: {
  item: PortfolioItem;
  isVisible: boolean;
}) => (
  <Link to={item.link} className="block group">
    <div
      className={`h-[50vh] ${item.desktopHeight} overflow-hidden transition-all duration-1500 ${
        item.delay ?? ""
      } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <img
        src={item.image}
        alt={item.title || "Portfolio item"}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    {item.title && (
      <div
        className={`py-tight md:py-6 text-center bg-white transition-all duration-1500 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-base">{item.title}</p>
      </div>
    )}
  </Link>
);

const Portfolio = () => {
  const [firstRowVisible, setFirstRowVisible] = useState(false);
  const [secondRowVisible, setSecondRowVisible] = useState(false);
  const [thirdRowVisible, setThirdRowVisible] = useState(false);

  const firstRowRef = useRef<HTMLDivElement>(null);
  const secondRowRef = useRef<HTMLDivElement>(null);
  const thirdRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const firstRowObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFirstRowVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const secondRowObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSecondRowVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const thirdRowObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setThirdRowVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (firstRowRef.current) {
      firstRowObserver.observe(firstRowRef.current);
    }
    if (secondRowRef.current) {
      secondRowObserver.observe(secondRowRef.current);
    }
    if (thirdRowRef.current) {
      thirdRowObserver.observe(thirdRowRef.current);
    }

    return () => {
      if (firstRowRef.current) {
        firstRowObserver.unobserve(firstRowRef.current);
      }
      if (secondRowRef.current) {
        secondRowObserver.unobserve(secondRowRef.current);
      }
      if (thirdRowRef.current) {
        thirdRowObserver.unobserve(thirdRowRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full">
      {/* Portfolio Title */}
      <div className="pt-40 pb-section lg:pt-48 lg:pb-section-lg flex items-center justify-center">
        <h1 className="text-4xl text-center font-normal">PORTFOLIO</h1>
      </div>

      {/* First Row - Al Mukhtar (full height) + Valor (half height).
          gap-block only applies while the tiles are stacked on mobile; from md
          up the tiles sit flush next to each other as the design intends. */}
      <div ref={firstRowRef} className="flex flex-col md:flex-row gap-block md:gap-0 w-full">
        <div className="w-full md:w-1/2">
          <PortfolioTile item={portfolioItems[0]} isVisible={firstRowVisible} />
        </div>
        <div className="w-full md:w-[40%]">
          <PortfolioTile item={portfolioItems[1]} isVisible={firstRowVisible} />
        </div>
      </div>

      {/* Second Row - Three Column Grid */}
      <div
        ref={secondRowRef}
        className="w-full px-0 md:px-[10%] py-block md:py-section-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-block md:gap-0 w-full">
          {secondRowItems.map((item) => (
            <PortfolioTile
              key={item.id}
              item={item}
              isVisible={secondRowVisible}
            />
          ))}
        </div>
      </div>

      {/* Third Row - Asymmetric Two Column Layout */}
      <div
        ref={thirdRowRef}
        className="flex flex-col md:flex-row gap-block md:gap-0 w-full mb-section lg:mb-section-lg"
      >
        <div className="w-full md:w-1/2">
          <PortfolioTile item={thirdRowItems[0]} isVisible={thirdRowVisible} />
        </div>
        <div className="w-full md:w-1/2">
          <PortfolioTile item={thirdRowItems[1]} isVisible={thirdRowVisible} />
        </div>
      </div>

      {/* Remaining case studies, scrollable */}
      <ProjectCarousel />
    </div>
  );
};

export default Portfolio;
