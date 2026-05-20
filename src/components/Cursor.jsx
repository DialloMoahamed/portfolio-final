import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = -100, my = -100; // position souris
    let rx = -100, ry = -100; // position anneau (laggy)
    let raf;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const loop = () => {
      // Dot suit instantanément
      dot.style.transform = `translate(${mx}px, ${my}px)`;

      // Ring suit avec inertie
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;

      raf = requestAnimationFrame(loop);
    };

    // Grow sur les éléments cliquables
    const grow = () => ring.classList.add("cursor-ring--hover");
    const shrink = () => ring.classList.remove("cursor-ring--hover");

    const bindHover = () => {
      document.querySelectorAll("a, button, [role='button'], .project-card, .nav-logo").forEach(el => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);

    // Rebind après que le DOM soit chargé
    setTimeout(bindHover, 500);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
