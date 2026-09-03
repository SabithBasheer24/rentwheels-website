import { BUSINESS } from "../data";
import { buildWhatsAppLink, defaultMessage } from "../whatsapp";

export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <p className="eyebrow"><span className="bar" /> FIND US</p>
      <h2 className="section-title">GET IN <span className="accent">TOUCH</span></h2>
      <p>Open 24 hours · 7 days a week</p>

      <p>
      <a href="https://www.facebook.com/share/1M8egU4RUr/" target="_blank" rel="noreferrer">
        Follow {BUSINESS.name} on Facebook
      </a>
      </p>
      <p>
        <a href="https://maps.app.goo.gl/iBN8Dhef2Lh6LxPA6" target="_blank" rel="noreferrer">
          ⭐ 5.0 across 28 reviews on Google
        </a>
      </p>

      <div className="contact-actions">
        <a href={buildWhatsAppLink(defaultMessage())} className="btn btn-whatsapp" target="_blank" rel="noreferrer">
          💬 Message us
        </a>
        <a href="https://maps.app.goo.gl/iBN8Dhef2Lh6LxPA6" target="_blank" rel="noreferrer" className="btn btn-outline">
          📍 Get directions
        </a>
      </div>

      <p className="footer-note">Replace the map, phone number and address with your own before you publish.</p>
      <p className="copyright">© {new Date().getFullYear()} {BUSINESS.name}. Built with React.</p>
    </footer>
  );
}
