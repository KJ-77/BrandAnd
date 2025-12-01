import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
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
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    image: AlMukhtarImage,
    title: "Al Mukhtar - UAE",
    link: "/",
  },
  {
    id: 2,
    image: FourFlagsImage,
    title: "Valor Collective - London UK",
    link: "/",
  },
];

const secondRowItems: PortfolioItem[] = [
  {
    id: 3,
    image: BoxesMockupImage,
    title: "Dimmi - Global",
    link: "/",
  },
  {
    id: 4,
    image: CupsMockupImage,
    title: "Rise - Lebanon",
    link: "/",
  },
  {
    id: 5,
    image: MagazineMockup2Image,
    title: "Unbox - Dubai",
    link: "/",
  },
];

const thirdRowItems: PortfolioItem[] = [
  {
    id: 6,
    image: FoodMockupImage,
    title: "Lovin'thyme - UK",
    link: "/",
  },
  {
    id: 7,
    image: BoxesMockup2Image,
    title: "Mind Clinics - Lebanon",
    link: "/",
  },
];

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
      <div className="h-[503.19px] pt-32 flex items-center justify-center">
      <h1 className="text-4xl py-12 text-center font-medium">PORTFOLIO</h1>
      </div>
      {/* Portfolio Layout */}
      <div
        ref={firstRowRef}
        className="flex flex-col md:flex-row w-full"
      >
        {/* Left Side - Al Mukhtar (Full Height, 50% Width) */}
        <div className="w-full md:w-1/2">
          <Link
            to={portfolioItems[0].link}
            className="block group"
          >
            <div className={`h-[50vh] md:h-screen overflow-hidden transition-all duration-1500 ${
              firstRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img
                src={portfolioItems[0].image}
                alt="Portfolio item"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {portfolioItems[0].title && (
              <div className={`py-6 text-center bg-white transition-all duration-1500 delay-500 ${
                firstRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <p className="text-base">{portfolioItems[0].title}</p>
              </div>
            )}
          </Link>
        </div>

        {/* Right Side - Flags (Half Height, 40% Width with 10% Right Margin) */}
        <div className="w-full md:w-[40%]">
          <Link
            to={portfolioItems[1].link}
            className="block group"
          >
            <div className={`h-[50vh] md:h-[50vh] overflow-hidden transition-all duration-1500 delay-300 ${
              firstRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img
                src={portfolioItems[1].image}
                alt={portfolioItems[1].title || "Portfolio item"}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {portfolioItems[1].title && (
              <div className={`py-6 text-center bg-white transition-all duration-1500 delay-700 ${
                firstRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <p className="text-base">{portfolioItems[1].title}</p>
              </div>
            )}
          </Link>
        </div>
      </div>

      {/* Second Row - Three Column Grid */}
      <div
        ref={secondRowRef}
        className="w-full px-[10%] py-[20%]"
      >
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-0 w-full transition-all duration-1500 ${
          secondRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {secondRowItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="block group"
            >
              <div className="h-[30vh] md:h-[35vh] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title || "Portfolio item"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              {item.title && (
                <div className={`py-6 text-center bg-white transition-all duration-1500 delay-500 ${
                  secondRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <p className="text-base">{item.title}</p>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Third Row - Asymmetric Two Column Layout */}
      <div
        ref={thirdRowRef}
        className="flex flex-col md:flex-row gap-0 w-full mb-48"
      >
        {/* Left - Food Mockup (50% width, 50% height) */}
        <div className="w-full md:w-1/2">
          <Link
            to={thirdRowItems[0].link}
            className="block group"
          >
            <div className={`h-[40vh] md:h-[50vh] overflow-hidden transition-all duration-1500 delay-300 ${
              thirdRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img
                src={thirdRowItems[0].image}
                alt={thirdRowItems[0].title || "Portfolio item"}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {thirdRowItems[0].title && (
              <div className={`py-6 text-center bg-white transition-all duration-1500 delay-700 ${
                thirdRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <p className="text-base">{thirdRowItems[0].title}</p>
              </div>
            )}
          </Link>
        </div>

        {/* Right - Boxes Mockup 2 (50% width, 100% height) */}
        <div className="w-full md:w-1/2">
          <Link
            to={thirdRowItems[1].link}
            className="block group"
          >
            <div className={`h-[50vh] md:h-screen overflow-hidden transition-all duration-1500 ${
              thirdRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <img
                src={thirdRowItems[1].image}
                alt={thirdRowItems[1].title || "Portfolio item"}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {thirdRowItems[1].title && (
              <div className={`py-6 text-center bg-white transition-all duration-1500 delay-500 ${
                thirdRowVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <p className="text-base">{thirdRowItems[1].title}</p>
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
