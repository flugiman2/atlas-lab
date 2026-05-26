import React, { useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { PHONE } from "../lib/translations";

const QuickActions = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(true);

  if (!open) return null;

  return (
    <div
      data-testid="quick-actions"
      className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end gap-3"
    >
      <a
        data-testid="whatsapp-btn"
        href={`https://wa.me/${PHONE.whatsapp}?text=${encodeURIComponent(
          "Hola ATLAS LAB, me interesa una propuesta para mi web."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 btn-pill bg-white text-black pl-3 pr-4 py-2.5 text-[13px] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] hover:bg-white/90"
        aria-label={t.quick.whatsapp}
      >
        <span className="w-7 h-7 rounded-full bg-black flex items-center justify-center">
          <MessageCircle size={15} strokeWidth={1.8} className="text-white" />
        </span>
        <span className="hidden sm:inline">{t.quick.whatsapp}</span>
      </a>
      <a
        data-testid="call-btn"
        href={`tel:${PHONE.tel}`}
        className="group flex items-center gap-2 btn-pill bg-black/80 backdrop-blur border border-white/15 text-white pl-3 pr-4 py-2.5 text-[13px] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] hover:border-white/30"
        aria-label={t.quick.call}
      >
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <Phone size={14} strokeWidth={1.8} className="text-black" />
        </span>
        <span className="hidden sm:inline">{t.quick.call}</span>
      </a>
      <span className="hidden md:block text-[11px] tracking-[0.18em] uppercase text-tertiary mt-1">
        {t.quick.hint}
      </span>
    </div>
  );
};

export default QuickActions;
