import { VEHICLES } from "../data";
import { buildWhatsAppLink, quickVehicleMessage } from "../whatsapp";

function VehicleCard({ vehicle }) {
  return (
    <div className="vehicle-card">
      <div className="vehicle-photo">
        <span className="vehicle-badge">{vehicle.badge}</span>
        {vehicle.icon}
      </div>
      <div className="vehicle-body">
        <h3>{vehicle.name}</h3>
        <p>{vehicle.tagline}</p>
        <div className="specs">
          {vehicle.specs.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <a
          className="btn btn-whatsapp"
          href={buildWhatsAppLink(quickVehicleMessage(vehicle))}
          target="_blank"
          rel="noreferrer"
        >
          Check this vehicle →
        </a>
      </div>
    </div>
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="fleet">
      <p className="eyebrow">
        <span className="bar"></span> THE FLEET · {VEHICLES.length} ON SITE
      </p>
      <h2 className="section-title">
        PICK YOUR <span className="accent">RIDE</span>
      </h2>
      <p className="section-sub">
        A hatch for town, a van for the whole family, a hybrid for distance. Every vehicle is
        cleaned and checked before it leaves the yard.
      </p>

      <div className="fleet-scroll">
        {VEHICLES.map((v) => (
          <VehicleCard key={v.id} vehicle={v} />
        ))}
      </div>
      <p className="swipe-hint">→ swipe for more</p>
    </section>
  );
}
