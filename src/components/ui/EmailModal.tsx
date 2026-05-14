"use client";
import { createPortal } from "react-dom";
import { X, Mail, Copy, Check } from "lucide-react";
import { useEffect, useState } from "react";

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailModal({ isOpen, onClose }: EmailModalProps) {
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "soporte.pareai@gmail.com";

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-sm bg-[#111821] border border-[#0ed90e]/20 rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 bg-[#0ed90e]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Mail className="text-[#0ed90e]" size={32} />
          </div>
          
          <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
            Contáctanos
          </h3>
          <p className="text-slate-400 text-sm mb-8 leading-relaxed font-semibold">
            ¿Tienes dudas o sugerencias?<br />
            Escríbenos a este correo:
          </p>

          <div 
            onClick={copyToClipboard}
            className="group relative bg-[#0F172A] border border-white/5 rounded-2xl p-4 flex items-center justify-between cursor-pointer hover:border-[#0ed90e]/30 transition-all mb-8"
          >
            <span className="text-sm font-bold text-[#0ed90e]">{email}</span>
            {copied ? (
              <Check size={16} className="text-green-500" />
            ) : (
              <Copy size={16} className="text-slate-500 group-hover:text-white transition-colors" />
            )}
            
            {/* Tooltip for copy */}
            {copied && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-widest animate-in fade-in slide-in-from-bottom-1">
                Copiado!
              </div>
            )}
          </div>

          <a 
            href={`mailto:${email}`}
            className="block w-full bg-[#0ed90e] text-[#111821] font-black py-4 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all uppercase tracking-widest text-[10px]"
          >
            Abrir Correo
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}
