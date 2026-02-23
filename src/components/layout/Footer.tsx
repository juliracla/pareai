"use client";

import NextImage from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/logo.png";
import PDFModal from "../ui/PDFModal";
import ContactModal from "../ui/ContactModal";

export default function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="bg-slate-900 py-16 border-t border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-left">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <NextImage 
                src={logo} 
                alt="Pare Ahí Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed font-semibold">
              La primera aplicación colombiana enfocada en el ahorro real durante las compras de supermercado mediante inteligencia artificial.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 text-white uppercase italic tracking-wider">Producto</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#features">Características</Link></li>
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#pricing">Precios</Link></li>
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#">Tecnología de Visión IA</Link></li>

            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 text-white uppercase italic tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li>
                <button 
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-[#0ed90e] transition-colors cursor-pointer text-left"
                >
                  Privacidad
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsTermsOpen(true)}
                  className="hover:text-[#0ed90e] transition-colors cursor-pointer text-left"
                >
                  Términos
                </button>
              </li>
            
              <li>
       {/*          <button 
                  onClick={() => setIsContactOpen(true)}
                  className="hover:text-[#0ed90e] transition-colors cursor-pointer text-left"
                >
                  Contacto
                </button> */}
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <p>© 2026 PareAi! - Hecho en Colombia 🇨🇴</p>
          <div className="flex gap-6">
            <Link className="hover:text-[#0ed90e] transition-colors" href="#">Tiktok</Link>
            <Link className="hover:text-[#0ed90e] transition-colors" href="#">Instagram</Link>
            <Link className="hover:text-[#0ed90e] transition-colors" href="#">Gmail</Link>
          </div>
        </div>
      </div>

      <PDFModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
        title="Política de Privacidad" 
        pdfUrl="/privacidad.pdf"
      />

      <PDFModal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)} 
        title="Términos y Condiciones" 
        pdfUrl="/terminos.pdf"
      />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </footer>
  );
}



