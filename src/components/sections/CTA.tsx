"use client";
import { Camera, BarChart3, Wallet } from "lucide-react";

export default function CTA() {
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.tustartup.pare_ai_app&pcampaignid=web_share";

  const features = [
    {
      icon: <Camera size={28} strokeWidth={1.5} />,
      title: "Escaneo Inteligente",
      description: "Apunta tu cámara a cualquier etiqueta de precio. Nuestra IA detecta el valor exacto al instante."
    },
    {
      icon: <BarChart3 size={28} strokeWidth={1.5} />,
      title: "Control Total",
      description: "Visualiza tu presupuesto en tiempo real. La app te avisa si te acercas a tu límite configurado."
    },
    {
      icon: <Wallet size={28} strokeWidth={1.5} />,
      title: "Ahorro Real",
      description: "Evita sorpresas en la caja. Gestiona tu lista y optimiza tus compras antes de pagar."
    }
  ];

  return (
    <section className="py-16 lg:py-36 relative overflow-hidden" id="features">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[700px] h-[150px] lg:h-[300px] bg-[#0ed90e]/6 blur-[100px] lg:blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Section label */}
        <div className="text-center mb-12 lg:after:mb-16">
          <span className="text-[10px] font-black text-[#0ed90e] uppercase tracking-[0.4em]">Características</span>
          <h2 className="mt-4 text-3xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            ¿Cómo funciona?
          </h2>
          <div className="mt-6 w-12 h-0.5 bg-[#0ed90e] mx-auto" />
        </div>

        {/* Feature cards — Live N Move 3-circle style */}
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12 mb-16 lg:mb-20">
          {features.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center gap-4 lg:gap-5 reveal" style={{transitionDelay: `${idx * 0.1}s`}}>

              {/* Circle icon — the key Live N Move visual */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 border-[#0ed90e] flex items-center justify-center text-[#0ed90e] relative group transition-all duration-500 hover:bg-[#0ed90e] hover:text-[#111821]"
                style={{boxShadow: '0 0 30px -8px rgba(14,217,14,0.3), inset 0 0 30px -15px rgba(14,217,14,0.1)'}}>
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm lg:text-base font-black uppercase tracking-wider text-white mb-2">{item.title}</h3>
                <p className="text-xs lg:text-sm text-slate-400 leading-relaxed font-light max-w-xs mx-auto">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/8 mb-16 lg:mb-20" />

        {/* Download CTA block */}
        <div className="text-center flex flex-col items-center gap-6 lg:gap-8 scroll-mt-24" id="download">
          <h3 className="text-2xl lg:text-5xl font-black uppercase tracking-tighter text-white leading-[0.9]">
            Empieza a ahorrar<br className="hidden sm:block" />
            <span className="text-[#0ed90e]" style={{textShadow: '0 0 30px rgba(14,217,14,0.35)'}}> ahora mismo.</span>
          </h3>
          <p className="text-slate-400 max-w-md text-sm lg:text-base font-light leading-relaxed">
            Descarga PareAi y transforma tu manera de mercar. La IA que cuida tu bolsillo está a un clic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 items-center w-full sm:w-auto">
            {/* Primary: Google Play */}
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-4 bg-[#0ed90e] text-[#111821] px-8 py-4 lg:py-5 rounded-full font-black uppercase tracking-tight transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_-15px_rgba(14,217,14,0.5)]"
            >
              <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center bg-[#111821] rounded-full text-[#0ed90e] group-hover:rotate-12 transition-transform shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 lg:w-5 lg:h-5 fill-current">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.26 2.26 0 0 1-.61-1.57V3.384c0-.603.221-1.168.609-1.57zM14.498 12.7l2.522 2.522L4.691 22.548a2.235 2.235 0 0 1-1.082-.362l10.889-9.486zm3.328-3.327l3.616 2.066a2.26 2.26 0 0 1 0 3.963l-3.616 2.066-3.15-3.15 3.15-3.15zM14.498 11.3L4.691 1.452A2.235 2.235 0 0 1 5.773 1.09l12.329 7.036-3.604 3.174z"/>
                </svg>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[8px] lg:text-[9px] opacity-60 mb-0.5 font-medium tracking-widest">DISPONIBLE EN</span>
                <span className="text-base lg:text-lg font-black">Google Play</span>
              </div>
            </a>

            {/* Ghost: App Store */}
            <a
              href="#"
              className="group w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-4 bg-transparent border border-white/20 hover:border-[#0ed90e]/50 text-white px-8 py-4 lg:py-5 rounded-full font-black uppercase tracking-tight transition-all hover:scale-105 active:scale-95"
            >
              <div className="w-8 h-8 lg:w-9 lg:h-9 flex items-center justify-center bg-white/8 rounded-full text-white shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 lg:w-5 lg:h-5 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[8px] lg:text-[9px] opacity-60 mb-0.5 font-medium tracking-widest">COMING SOON</span>
                <span className="text-base lg:text-lg font-black">App Store</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
