import { BUSINESS } from "./data";

// Builds a wa.me link that opens WhatsApp with a pre-filled message.
export function buildWhatsAppLink(message) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function quickVehicleMessage(vehicle) {
  return `Hi, I'm interested in renting the ${vehicle.name}. Is it available?`;
}

export function defaultMessage() {
  return `Hi, I'd like to enquire about renting a vehicle from ${BUSINESS.name}.`;
}
