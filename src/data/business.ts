import { whatsappLink } from "../lib/whatsapp";
export const business = {
  name: "Odontología Integral Las Heras",
  title:
    "Odontología Integral Las Heras | Natalia Borlando y José Manuel Ispizua",
  description:
    "Odontología integral con Natalia Borlando y José Manuel Ispizua. 20 años de compromiso con cada sonrisa. Gral. Las Heras / Marcos Paz. Consultá por tu turno.",
  phone: "541123785988",
  phoneLabel: "+54 11 2378-5988",
  location: "Gral. Las Heras / Marcos Paz",
};
export const whatsapp = whatsappLink(
  business.phone,
  "Hola, quisiera consultar por un turno.",
);
