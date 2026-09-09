import { useState, useEffect } from "react";
import { VEHICLES, BUSINESS } from "../data";
import { buildWhatsAppLink } from "../whatsapp";

const TOTAL_STEPS = 4;

export default function Booking({ presetVehicle }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    vehicle: "",
    hireType: "",
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    name: "",
    phone: "",
    notes: "",
  });

  useEffect(() => {
    if (presetVehicle) {
      setForm((f) => ({ ...f, vehicle: presetVehicle }));
    }
  }, [presetVehicle]);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function validate() {
    if (step === 1 && !form.vehicle) return "Pick a vehicle to continue.";
    if (step === 2 && !form.hireType) return "Choose self drive or with a driver.";
    if (step === 4 && (!form.name || !form.phone)) return "Add your name and phone number.";
    return null;
  }

  function next() {
    const error = validate();
    if (error) { alert(error); return; }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  }
  function back() {
    setStep((s) => Math.max(s - 1, 1));
  }

  function buildMessage() {
    return [
      `Booking request — ${BUSINESS.name}`,
      ``,
      `Vehicle: ${form.vehicle}`,
      `Hire type: ${form.hireType}`,
      `Pickup date: ${form.pickupDate || "not set"}`,
      `Return date: ${form.returnDate || "not set"}`,
      `Pickup location: ${form.pickupLocation || "not set"}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Notes: ${form.notes || "-"}`,
      ``,
      `Sent from the website.`,
    ].join("\n");
  }

  function handleSend(e) {
    const error = validate();
    if (error) { e.preventDefault(); alert(error); }
  }

  return (
    <section id="book" className="booking">
      <p className="eyebrow"><span className="bar" /> BOOKING REQUEST</p>
      <h2 className="section-title">SEND A <span className="accent">REQUEST</span></h2>
      <p className="section-sub">
        Answer a few questions — no account needed. It ends with a ready-made WhatsApp
        message you just hit send on.
      </p>

      <div className="booking-card">
        <div className="step-progress">
          <span>Step {step} / {TOTAL_STEPS}</span>
          <div className="step-bar">
            <span style={{ width: `${(step / TOTAL_STEPS) * 100}%` }} />
          </div>
        </div>

        {step === 1 && (
          <div className="step">
            <h3>Which vehicle?</h3>
            <p className="step-hint">Not sure? Pick "not sure" and describe what you need.</p>
            <div className="option-list">
              {VEHICLES.map((v) => (
                <label className="option-card" key={v.id}>
                  <input
                    type="radio"
                    name="vehicle"
                    value={v.name}
                    checked={form.vehicle === v.name}
                    onChange={(e) => update("vehicle", e.target.value)}
                  />
                  <div><strong>{v.name}</strong><p>{v.badge}</p></div>
                </label>
              ))}
              <label className="option-card">
                <input
                  type="radio"
                  name="vehicle"
                  value="Not sure — please recommend one"
                  checked={form.vehicle === "Not sure — please recommend one"}
                  onChange={(e) => update("vehicle", e.target.value)}
                />
                <div><strong>Not sure</strong><p>Recommend one based on what I need.</p></div>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step">
            <h3>Self drive, or with a driver?</h3>
            <div className="option-list">
              {["Self drive", "With a driver"].map((opt) => (
                <label className="option-card" key={opt}>
                  <input
                    type="radio"
                    name="hireType"
                    value={opt}
                    checked={form.hireType === opt}
                    onChange={(e) => update("hireType", e.target.value)}
                  />
                  <div>
                    <strong>{opt}</strong>
                    <p>{opt === "Self drive" ? "Take the keys and drive it yourself." : "Someone who knows the roads handles it."}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step">
            <h3>When, and where?</h3>
            <p className="step-hint">Give an estimate if you're not sure yet.</p>
            <label className="field">Pickup date
              <input type="date" value={form.pickupDate} onChange={(e) => update("pickupDate", e.target.value)} />
            </label>
            <label className="field">Return date
              <input type="date" value={form.returnDate} onChange={(e) => update("returnDate", e.target.value)} />
            </label>
            <label className="field">Pickup location
              <input
                type="text"
                placeholder="e.g. Kurunegala town, airport, bus stand..."
                value={form.pickupLocation}
                onChange={(e) => update("pickupLocation", e.target.value)}
              />
            </label>
          </div>
        )}

        {step === 4 && (
          <div className="step">
            <h3>How can we reach you?</h3>
            <label className="field">Your name
              <input type="text" placeholder="Name" value={form.name} onChange={(e) => update("name", e.target.value)} />
            </label>
            <label className="field">Phone number
              <input type="tel" placeholder="07X XXX XXXX" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </label>
            <label className="field">Notes
              <textarea placeholder="Flight number, number of people, anything else" value={form.notes} onChange={(e) => update("notes", e.target.value)} />
            </label>

            <div className="summary">
              {`Vehicle: ${form.vehicle}\nHire type: ${form.hireType}\nPickup: ${form.pickupDate || "—"}   Return: ${form.returnDate || "—"}\nLocation: ${form.pickupLocation || "—"}`}
            </div>
          </div>
        )}

        <div className="step-actions">
          {step > 1 && <button className="btn btn-ghost" onClick={back}>Back</button>}
          {step < TOTAL_STEPS && <button className="btn btn-primary" onClick={next}>Continue →</button>}
          {step === TOTAL_STEPS && (
            <a
              className="btn btn-whatsapp"
              href={buildWhatsAppLink(buildMessage())}
              target="_blank"
              rel="noreferrer"
              onClick={handleSend}
            >
              💬 Send on WhatsApp
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
