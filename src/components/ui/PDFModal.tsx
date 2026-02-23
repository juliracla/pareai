import { createPortal } from "react-dom";
import { X, FileText } from "lucide-react";
import { useEffect, useState } from "react";

interface PDFModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pdfUrl: string;
}

export default function PDFModal({ 
  isOpen, 
  onClose, 
  title, 
  pdfUrl 
}: PDFModalProps) {
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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-[#1E293B] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#1E293B]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0ed90e]/10 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#0ed90e]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase italic tracking-tight">
              {title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-slate-800/50">
          <iframe
            src={`${pdfUrl}#view=FitH`}
            className="w-full h-full border-none"
            title={title}
          />
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 bg-[#1E293B] flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-slate-700 text-white font-black rounded-xl hover:bg-slate-600 transition-all uppercase tracking-widest text-sm"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
