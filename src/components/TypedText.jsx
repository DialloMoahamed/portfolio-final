import { useState, useEffect } from "react";

export default function TypedText({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[idx % words.length];
    const speed = deleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1800);
        return;
      }

      if (deleting && text === "") {
        setDeleting(false);
        setIdx((i) => i + 1);
        return;
      }

      setText(
        deleting
          ? text.slice(0, -1)
          : word.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [text, deleting, idx, words]);

  return (
    <span>
      {text}
      <span className="typed-cursor" />
    </span>
  );
}