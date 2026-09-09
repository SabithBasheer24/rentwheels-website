import { BUSINESS } from "../data";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="eyebrow">
        <span className="bar"></span> KURUNEGALA &nbsp;/&nbsp; OPEN 24 HOURS &nbsp;/&nbsp; ISLAND-WIDE
      </p>
      <h1 className="headline">
        KEYS IN
        <br />
        <span className="ghost">YOUR HAND</span>
        <br />
        <span className="accent">TODAY.</span>
      </h1>
      <p className="sub">
        Cars and vans for hire in Kurunegala — drive it yourself or take a driver. Airport runs,
        weddings, tours, or a vehicle for the whole month.
      </p>

      <div className="hero-actions">
        <a href="#book" className="btn btn-primary">
          📄 Send a booking request
        </a>
        <a href={`tel:${BUSINESS.displayPhone.replace(/\s/g, "")}`} className="btn btn-outline">
          📞 {BUSINESS.displayPhone}
        </a>
      </div>

      <div className="hero-meta">
        <span>🕐 24 hours · every day</span>
        <span>🚗 Self drive · or with driver</span>
      </div>
    </section>
  );
}
