"use client";
import NextImage from "next/image";
import mainImage from "../../assets/main.png";
import appIcon from "../../assets/icon.png";

export default function Hero() {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.tustartup.pare_ai_app&pcampaignid=web_share";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">

          {/* LEFT: typography block */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">

            {/* Label badge */}
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-5 h-5 rounded-full border-2 border-[#0ed90e] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#0ed90e]" />
              </div>
              <span className="text-[10px] font-black text-[#0ed90e] uppercase tracking-[0.3em]">Pare Ahí!</span>
            </div>

            {/* Main heading — Live N Move style: large, line-broken, bold */}
            <h1 className="font-black uppercase leading-[0.9] tracking-tighter">
              <span className="block text-6xl lg:text-8xl xl:text-[6.5rem] text-white">Mercar</span>
              <span className="block text-6xl lg:text-8xl xl:text-[6.5rem] text-white">sin</span>
              <span className="block text-6xl lg:text-8xl xl:text-[6.5rem] text-[#0ed90e]">Estrés.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-slate-400 max-w-md leading-relaxed font-light">
              Controla tu presupuesto en tiempo real con <span className="text-white font-medium">nuestro escaner integrado con IA</span>. Escanea, compara y ahorra en segundos.
            </p>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="#download"
                className="group inline-flex items-center gap-3 bg-[#0ed90e] text-[#111821] px-8 py-4 font-black uppercase tracking-[0.15em] text-sm rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_15px_40px_-10px_rgba(14,217,14,0.5)]"
              >
                Descargar App
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current group-hover:translate-x-1 transition-transform">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-black uppercase tracking-[0.15em] transition-colors py-4"
              >
                Ver más
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/8">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#111821] overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} viewBox="0 0 20 20" className="w-3 h-3 fill-[#0ed90e]">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">+5,000 usuarios ahorrando</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Simple primary App Icon */}
          <div className="flex justify-center lg:justify-end items-center">
            <NextImage 
              src={appIcon} 
              alt="Pare Ahí App Icon" 
              width={600}
              height={600}
              className="w-72 h-72 sm:w-96 sm:h-96 lg:w-[580px] lg:h-[580px] object-contain"
              style={{ filter: 'saturate(1.3) contrast(1.1) brightness(1.05)' }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
