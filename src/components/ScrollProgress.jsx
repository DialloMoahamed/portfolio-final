import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el  = document.documentElement;
      const top = el.scrollTop || document.body.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      setProgress(max > 0 ? (top / max) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="scroll-progress-track">
      <div className="scroll-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
