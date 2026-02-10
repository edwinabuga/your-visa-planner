"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function WhatsAppButton() {
  const url = getWhatsAppUrl("Hello! I'd like to enquire about UK visa services.");

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg hover:bg-[#20bd5a] transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
}
