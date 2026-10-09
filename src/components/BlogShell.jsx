import { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import ScrollProgress from "./ScrollProgress";
import Nav from "./Nav";
import Footer from "../sections/Footer";

// Mise en page commune aux pages /blog et /blog/:slug
export default function BlogShell({ children }) {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <>
      <ScrollProgress />
      <Nav active="Blog" scrolled={scrolled} theme={theme} onThemeToggle={toggle} />
      <main className="blog-page">{children}</main>
      <Footer />
    </>
  );
}
