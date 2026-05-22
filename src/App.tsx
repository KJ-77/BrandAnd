import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import Portfolio from "./pages/portfolio";
import { ContactPage } from "./pages/contact";
import { AboutPage } from "./pages/about";
import { AlMokhtar } from "./pages/al-mokhtar";
import { NotFoundPage } from "./pages/not-found";
import ComingSoon from "./pages/coming-soon";

// Wraps inner routes so we can hide chrome on the coming-soon root
const AppShell = () => {
  const location = useLocation();
  const isComingSoon = location.pathname === "/";

  return (
    <div className="min-h-screen bg-white">
      {!isComingSoon && <Navigation />}
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/al-mokhtar" element={<AlMokhtar />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!isComingSoon && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppShell />
    </Router>
  );
};

export default App;
