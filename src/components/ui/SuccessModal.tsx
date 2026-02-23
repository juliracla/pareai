import { createPortal } from "react-dom";
import { CheckCircle2, X } from "lucide-react";
import { useEffect, useState } from "react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export default function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
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

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#1E293B] border border-white/10 rounded-[32px] p-8 shadow-2xl animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-[#0ed90e]/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle2 className="w-10 h-10 text-[#0ed90e]" />
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase italic tracking-tight">
            ¡BIENVENIDO!
          </h3>
          
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {message}
          </p>
          
          <button 
            onClick={onClose}
            className="w-full bg-[#0ed90e] text-[#111821] font-black py-4 rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-[#0ed90e]/20 uppercase tracking-widest active:scale-[0.98]"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
