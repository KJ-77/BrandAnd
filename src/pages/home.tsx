import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { BrandSoul } from "@/components/brand-soul";
import { Footer } from "@/components/footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <BrandSoul />
      <Footer />
    </div>
  );
};

export default Home;
