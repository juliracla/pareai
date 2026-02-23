"use client";

import { MessageSquareText } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";

export default function HelpButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[9990] bg-[#0ed90e] text-[#111821] p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group flex items-center gap-2 overflow-hidden max-w-[60px] hover:max-w-[220px] duration-500"
        aria-label="Abrir formulario de ayuda"
      >
        <MessageSquareText className="w-8 h-8 shrink-0" />
        <span className="font-black uppercase tracking-widest text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 pr-2">
          ¿Necesitas Ayuda?
        </span>
      </button>

      <ContactModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
