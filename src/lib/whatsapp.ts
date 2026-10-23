export function whatsappLink(phone: string, message: string): string {
  if (!/^\d{8,15}$/.test(phone))
    throw new Error("Número internacional inválido");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
