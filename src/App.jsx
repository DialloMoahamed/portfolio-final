import { useState, useEffect } from "react";
import useScrollSpy from "./hooks/useScrollSpy";


import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Portfolio() {
  const activeSection = useScrollSpy();
  const [scrolled, setScrolled] = useState(false);
  

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <Nav active={activeSection} scrolled={scrolled}/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}