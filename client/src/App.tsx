import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { Newsletter } from "./components/Newsletter";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState("/");

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPath) {
      case "/":
        return <HomePage />;
      case "/about":
        return <AboutPage />;
      case "/services":
        return <ServicesPage />;
      case "/case-studies":
        return <CaseStudiesPage />;
      case "/newsletter":
        return <Newsletter />;
      case "/contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation currentPath={currentPath} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}