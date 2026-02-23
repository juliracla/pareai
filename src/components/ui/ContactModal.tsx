import { createPortal } from "react-dom";
import { X, MessageSquare, Mail, Instagram, Send } from "lucide-react";
import { useEffect, useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ 
  isOpen, 
  onClose 
}: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const contactOptions = [
    {
      name: "WhatsApp",
      description: "Chat directo para soporte rápido",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "bg-green-500",
      link: "https://wa.me/573000000000", // Placeholder for actual number
      action: "Enviar Mensaje"
    },
    {
      name: "Email",
      description: "Consultas comerciales y prensa",
      icon: <Mail className="w-6 h-6" />,
      color: "bg-blue-500",
      link: "mailto:contacto@pareai.app",
      action: "Enviar Correo"
    },
    {
      name: "Instagram",
      description: "Síguenos y escríbenos por DM",
      icon: <Instagram className="w-6 h-6" />,
      color: "bg-pink-600",
      link: "https://instagram.com/pareai.app",
      action: "Ir al Perfil"
    }
  ];

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-lg bg-[#1E293B] border border-white/10 rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#0ed90e]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Send className="w-8 h-8 text-[#0ed90e]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-white uppercase italic tracking-tight mb-2">
            HABLEMOS
          </h3>
          <p className="text-slate-400 font-semibold leading-relaxed">
            ¿Tienes dudas? Estamos aquí para ayudarte a ahorrar.
          </p>
        </div>

        <div className="space-y-4">
          {contactOptions.map((option, idx) => (
            <a 
              key={idx}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-[#0ed90e]/30 transition-all group"
            >
              <div className={`w-12 h-12 ${option.color} rounded-xl flex items-center justify-center shadow-lg`}>
                {option.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white uppercase italic text-sm tracking-wide group-hover:text-[#0ed90e] transition-colors">
                  {option.name}
                </h4>
                <p className="text-xs text-slate-400 font-medium">
                  {option.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <button 
          onClick={onClose}
          className="w-full mt-8 bg-slate-700 text-white font-black py-4 rounded-2xl hover:bg-slate-600 transition-all uppercase tracking-widest text-sm"
        >
          Cerrar
        </button>
      </div>
    </div>,
    document.body
  );
}
