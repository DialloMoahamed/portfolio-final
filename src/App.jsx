import { useState, useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import useScrollSpy from "./hooks/useScrollSpy";
import useTheme     from "./hooks/useTheme";

import Loader         from "./components/Loader";
import Cursor         from "./components/Cursor";
import ScrollProgress from "./components/ScrollProgress";
import Nav            from "./components/Nav";
import Hero           from "./sections/Hero";
import About          from "./sections/About";
import Skills         from "./sections/Skills";
import Projects       from "./sections/Projects";
import Contact        from "./sections/Contact";
import Footer         from "./sections/Footer";
import NotFound       from "./pages/NotFound";

function Portfolio() {
  const activeSection = useScrollSpy();
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Nav active={activeSection} scrolled={scrolled} theme={theme} onThemeToggle={toggle} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <>
      {/* Cursor personnalisé — affiché partout */}
      <Cursor />

      {/* Loader d'entrée */}
      {!loaded && <Loader onDone={handleLoaded} />}

      {/* Contenu principal — visible après loader */}
      <div className={`app-content${loaded ? " app-content--visible" : ""}`}>
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Portfolio />} />
            <Route path="*"  element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
