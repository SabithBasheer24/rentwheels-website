import { SERVICES } from "../data";

export default function Services() {
  return (
    <section id="services" className="services">
      <p className="eyebrow">
        <span className="bar"></span> WHAT WE DO
      </p>
      <h2 className="section-title">
        MORE THAN A <span className="accent">RENTAL</span>
      </h2>
      <p className="section-sub">
        One number covers the school run, the airport run and the wedding. Tell us the job, we
        send the right vehicle.
      </p>

      <div className="service-list">
        {SERVICES.map((s) => (
          <div className="service-item" key={s.num}>
            <span className="service-num">{s.num}</span>
            <div>
              <h4>{s.title}</h4>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
