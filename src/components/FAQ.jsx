import { useState } from "react";
import { FAQS } from "../data";

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <div className="faq-q" onClick={() => setOpen((v) => !v)}>
        {q}
        <span>{open ? "–" : "+"}</span>
      </div>
      <div className="faq-a"><p>{a}</p></div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="faq">
      <p className="eyebrow"><span className="bar" /> QUESTIONS</p>
      <h2 className="section-title">ASKED <span className="accent">OFTEN</span></h2>
      <div className="faq-list">
        {FAQS.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </section>
  );
}
