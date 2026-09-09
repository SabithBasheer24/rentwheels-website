import { useState } from "react";
import { BUSINESS } from "../data";

const LINKS = [
  ["#home", "Home"],
  ["#fleet", "Fleet"],
  ["#services", "Services"],
  ["#book", "Book"],
  ["#faq", "FAQ"],
  ["#contact", "Contact"],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-left">
        <a href="#home" className="logo">
          RENT<span>WHEELS</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {LINKS.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="header-right">
        <a href={`tel:${BUSINESS.displayPhone.replace(/\s/g, "")}`} className="hotline">
          <span className="hotline-dot" />
          <span className="hotline-label">Hotline</span>
          <span className="hotline-number">{BUSINESS.displayPhone}</span>
        </a>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}