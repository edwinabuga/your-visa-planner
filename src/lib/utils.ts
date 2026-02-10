export function getWhatsAppUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const base = `https://wa.me/${number}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function getFilloutFormUrl(): string {
  return process.env.NEXT_PUBLIC_FILLOUT_FORM_URL || "";
}
