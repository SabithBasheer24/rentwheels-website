import { BUSINESS } from "../data";
import { buildWhatsAppLink, defaultMessage } from "../whatsapp";
import Logo from "./logo";
export default function Contact() {
  return (
    <footer id="contact" className="contact">
      <p className="eyebrow"><span className="bar" /> FIND US</p>
       <Logo size="footer" animated={false} />
      <h2 className="section-title">GET IN <span className="accent">TOUCH</span></h2>
      <p>Open 24 hours · 7 days a week</p>

      <p>
      <a href="https://www.facebook.com/share/1M8egU4RUr/" target="_blank" rel="noreferrer">
        Follow {BUSINESS.name} on Facebook
      </a>
      </p>
      <p>
        <a href="https://maps.app.goo.gl/iBN8Dhef2Lh6LxPA6" target="_blank" rel="noreferrer">
          ⭐ see our reviews
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

      <p className="copyright">© {new Date().getFullYear()} {BUSINESS.name}.</p>
      <a className="copyright" href="https://www.linkedin.com/in/sabith-basheer-55174b338" target="_blank" rel="noreferrer">
        Designed & Developed by Sabith Basheer
      </a>
    </footer>
  );
}
