import { NAV_LINKS } from "../data/navLinks";

export default function Nav({ active, scrolled }) {
  const scroll = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-logo" onClick={() => scroll("home")}>
        &lt;Mohamed /&gt;
      </div>

      <ul className="nav-links">
        {NAV_LINKS.map((n) => (
          <li key={n}>
            <a
              className={active === n ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                scroll(n);
              }}
              href={`#${n.toLowerCase()}`}
            >
              {n}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}