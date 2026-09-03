import { buildWhatsAppLink, defaultMessage } from "../whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={buildWhatsAppLink(defaultMessage())}
      target="_blank"
      rel="noreferrer"
      aria-label="Message us on WhatsApp"
    >
      💬
    </a>
  );
}
