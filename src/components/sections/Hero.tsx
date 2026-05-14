"use client";
import NextImage from "next/image";
import mainImage from "../../assets/main.png";
import appIcon from "../../assets/icon.png";
import EmailModal from "../ui/EmailModal";
import { useState } from "react";

export default function Hero() {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.tustartup.pare_ai_app&pcampaignid=web_share";
  const [isEmailOpen, setIsEmailOpen] = useState(false);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

          {/* MAIN CONTENT BLOCK */}
          <div className="flex flex-col gap-8 lg:gap-10 order-1 lg:order-1 text-center lg:text-left items-center lg:items-start">
            
            {/* 1. Badge & Title (Top on mobile) */}
            <div className="flex flex-col gap-6 lg:gap-10 items-center lg:items-start">
              {/* Label badge */}
              <div className="inline-flex items-center gap-2 w-fit">
                <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full border-2 border-[#0ed90e] flex items-center justify-center">
                  <div className="w-2 lg:w-2.5 h-2 lg:h-2.5 rounded-full bg-[#0ed90e]" />
                </div>
                <span className="text-[10px] lg:text-xs font-black text-[#0ed90e] uppercase tracking-[0.3em]">PareAi</span>
              </div>

              {/* Main heading */}
              <h1 className="font-black uppercase leading-[0.9] lg:leading-[0.85] tracking-tighter">
                <span className="block text-6xl sm:text-7xl lg:text-9xl xl:text-[8.5rem] text-white">Mercar</span>
                <span className="block text-6xl sm:text-7xl lg:text-9xl xl:text-[8.5rem] text-white">sin</span>
                <span className="block text-6xl sm:text-7xl lg:text-9xl xl:text-[8.5rem] text-[#0ed90e]">Estrés.</span>
              </h1>
            </div>

            {/* 2. App Icon (Middle on mobile, Right on desktop) */}
            <div className="flex lg:hidden justify-center items-center py-4 sm:py-8">
              <NextImage 
                src={appIcon} 
                alt="Pare Ahí App Icon" 
                width={600}
                height={600}
                className="w-[85vw] h-auto max-w-[320px] sm:max-w-[550px] object-contain drop-shadow-[0_0_50px_rgba(14,217,14,0.4)]"
                style={{ filter: 'saturate(1.2) contrast(1.1) brightness(1.05)' }}
                priority
              />
            </div>

            {/* 3. Subtitle, CTA & Socials */}
            <div className="flex flex-col gap-8 lg:gap-10 items-center lg:items-start w-full">
              {/* Subtitle */}
              <p className="text-base lg:text-xl text-slate-400 max-w-xl leading-relaxed font-light">
                Controla tu presupuesto en tiempo real con <span className="text-white font-medium">nuestro escaner integrado con IA</span>. Escanea, compara y ahorra en segundos.
              </p>

              {/* CTA button */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center lg:items-start w-full sm:w-auto">
                <a
                  href="#download"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0ed90e] text-[#111821] px-8 lg:px-10 py-4 lg:py-5 font-black uppercase tracking-[0.15em] text-sm lg:text-base rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-10px_rgba(14,217,14,0.5)]"
                >
                  Descargar App
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current group-hover:translate-x-1 transition-transform">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm lg:text-base font-black uppercase tracking-[0.15em] transition-colors py-3 lg:py-5"
                >
                  Ver más
                </a>
              </div>

              {/* Social media links */}
              <div className="flex items-center gap-6 lg:gap-8 pt-6 lg:pt-8 border-t border-white/8 w-full justify-center lg:justify-start">
                <span className="text-[10px] lg:text-sm text-[#0ed90e] font-black uppercase tracking-widest">Siguenos en:</span>
                <div className="flex items-center gap-5 lg:gap-6">
                  <a 
                    href="https://www.instagram.com/pareai.app?igsh=MXc5NHFpN2hiNnl2dw==" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0ed90e] hover:text-white transition-all hover:scale-110 active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@pareai.app?_r=1&_t=ZS-96LBZPN7rK4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#0ed90e] hover:text-white transition-all hover:scale-110 active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="lg:w-[30px] lg:h-[30px]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.05.7.08 1.42.39 2.06.32.74.89 1.34 1.57 1.71.71.34 1.5.44 2.27.4 1.02-.01 1.98-.49 2.62-1.26.54-.61.81-1.41.83-2.21V.02z"/></svg>
                  </a>
                  <button 
                    onClick={() => setIsEmailOpen(true)}
                    className="text-[#0ed90e] hover:text-white transition-all hover:scale-110 active:scale-95"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: App Icon (Desktop only) */}
          <div className="hidden lg:flex justify-center lg:justify-end items-center lg:order-2">
            <NextImage 
              src={appIcon} 
              alt="Pare Ahí App Icon" 
              width={800}
              height={800}
              className="lg:w-[600px] lg:h-[600px] xl:w-[800px] xl:h-[800px] object-contain"
              style={{ filter: 'saturate(1.2) contrast(1.1) brightness(1.05)' }}
              priority
            />
          </div>

          {/* Email Modal */}
          <EmailModal isOpen={isEmailOpen} onClose={() => setIsEmailOpen(false)} />

        </div>
      </div>
    </section>
  );
}
