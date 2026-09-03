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
  return (
    <header className="site-header">
      <div className="header-left">
        <a href="#home" className="logo">
          RENT<span>WHEELS</span>
        </a>

        <nav className="nav-links">
          {LINKS.map(([href, label]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
      </div>

      <a href={`tel:${BUSINESS.displayPhone.replace(/\s/g, "")}`} className="hotline">
        <span className="hotline-dot" />
        <span className="hotline-label">Hotline</span>
        <span className="hotline-number">{BUSINESS.displayPhone}</span>
      </a>
    </header>
  );
}
