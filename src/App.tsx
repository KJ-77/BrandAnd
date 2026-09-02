import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import { ScrollToTop } from "./components/scroll-to-top";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import { ContactPage } from "./pages/contact";
import { AboutPage } from "./pages/about";
import { NotFoundPage } from "./pages/not-found";

// Project case studies - keep in the same order as src/lib/projects.ts
import { AlMokhtar } from "./pages/al-mokhtar";
import { Valor } from "./pages/valor";
import { Dimmi } from "./pages/dimmi";
import { Rise } from "./pages/rise";
import { Unbox } from "./pages/unbox";
import { LovinThyme } from "./pages/lovin-thyme";
import { MindClinics } from "./pages/mind-clinics";
import { Cortina } from "./pages/cortina";
import { DomaineDesCedres } from "./pages/domaine-des-cedres";
import { EggsWithBenefits } from "./pages/eggs-with-benefits";
import { ForthAndGyfted } from "./pages/forth-and-gyfted";
import { LesDouceursDeNawal } from "./pages/les-douceurs-de-nawal";
import { MahmoudRasmi } from "./pages/mahmoud-rasmi";
import { Matterlab } from "./pages/matterlab";
import { Sajpan } from "./pages/sajpan";
import { Twigo } from "./pages/twigo";
import { Zad } from "./pages/zad";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Project case studies */}
          <Route path="/projects/al-mokhtar" element={<AlMokhtar />} />
          <Route path="/projects/valor" element={<Valor />} />
          <Route path="/projects/dimmi" element={<Dimmi />} />
          <Route path="/projects/rise" element={<Rise />} />
          <Route path="/projects/unbox" element={<Unbox />} />
          <Route path="/projects/lovin-thyme" element={<LovinThyme />} />
          <Route path="/projects/mind-clinics" element={<MindClinics />} />
          <Route path="/projects/cortina" element={<Cortina />} />
          <Route
            path="/projects/domaine-des-cedres"
            element={<DomaineDesCedres />}
          />
          <Route
            path="/projects/eggs-with-benefits"
            element={<EggsWithBenefits />}
          />
          <Route
            path="/projects/forth-and-gyfted"
            element={<ForthAndGyfted />}
          />
          <Route
            path="/projects/les-douceurs-de-nawal"
            element={<LesDouceursDeNawal />}
          />
          <Route path="/projects/mahmoud-rasmi" element={<MahmoudRasmi />} />
          <Route path="/projects/matterlab" element={<Matterlab />} />
          <Route path="/projects/sajpan" element={<Sajpan />} />
          <Route path="/projects/twigo" element={<Twigo />} />
          <Route path="/projects/zad" element={<Zad />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
