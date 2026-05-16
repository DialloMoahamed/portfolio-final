import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/navLinks";

export default function useScrollSpy() {
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handler = () => {
      const sections = NAV_LINKS.map((n) =>
        document.getElementById(n.toLowerCase())
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.getBoundingClientRect().top <= 120) {
          setActive(NAV_LINKS[i]);
          return;
        }
      }

      setActive("Home");
    };

    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return active;
}