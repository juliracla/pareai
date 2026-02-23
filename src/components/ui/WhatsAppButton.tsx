import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "573000000000"; // Reemplazar con el número real
  const message = "Hola! Me gustaría tener más información sobre Pare Ahí.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[9990] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group flex items-center gap-2 overflow-hidden max-w-[60px] hover:max-w-[200px] duration-500"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8 shrink-0" />
      <span className="font-black uppercase tracking-widest text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 pr-2">
        Hablemos
      </span>
    </a>
  );
}
