import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import { ContactPage } from "./pages/contact";
import { AboutPage } from "./pages/about";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/*" element={<NotFoundPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
