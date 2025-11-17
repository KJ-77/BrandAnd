import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { BrandSoul } from "@/components/brand-soul";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <BrandSoul />
    </div>
  );
};

export default Home;
