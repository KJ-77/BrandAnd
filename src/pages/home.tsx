import { Hero } from "@/components/hero";
import { BrandSoul } from "@/components/brand-soul";
import { DailyPopup } from "@/components/daily-popup";

const Home = () => {
  return (
    <>
      <DailyPopup />
      <Hero />
      <BrandSoul />
    </>
  );
};

export default Home;
