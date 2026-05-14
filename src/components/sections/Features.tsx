import { Camera, BarChart3, Wallet, Smartphone, TrendingDown } from "lucide-react";

export default function Features() {
  const list = [
    {
      icon: <Camera size={28} />,
      title: "Escaneo Inteligente",
      description: "Apunta tu cámara a cualquier etiqueta de precio. Nuestra IA detecta el valor exacto al instante."
    },
    {
      icon: <BarChart3 size={28} />,
      title: "Control Total",
      description: "Visualiza tu presupuesto en tiempo real. La app te avisa si te acercas a tu límite configurado."
    },
    {
      icon: <Wallet size={28} />,
      title: "Ahorro Real",
      description: "Evita sorpresas en la caja. Gestiona tu lista y optimiza tus compras antes de pagar."
    }
  ];

  const highlights = [
    { icon: <Smartphone size={18} />, label: "Escanea" },
    { icon: <Camera size={18} />, label: "Detecta" },
    { icon: <BarChart3 size={18} />, label: "Controla" },
    { icon: <TrendingDown size={18} />, label: "Ahorra" },
  ];

  return (
    <section className="py-32 relative overflow-hidden dot-pattern" id="features">
      {/* Fades to blend with adjacent sections */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#111821] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#111821] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl lg:text-7xl font-black tracking-tighter title-gradient uppercase italic">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-slate-400 font-light">
            Mercar nunca fue tan inteligente. Sin cálculos manuales, sin estrés.
          </p>
        </div>

        {/* Icon highlight strip */}
        <div className="flex justify-center gap-8 lg:gap-16 mb-16 flex-wrap">
          {highlights.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0ed90e]/20 to-[#0ed90e]/5 border border-[#0ed90e]/20 flex items-center justify-center text-[#0ed90e] group-hover:scale-110 group-hover:border-[#0ed90e]/50 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-[#0ed90e] transition-colors">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Vertical connector */}
        <div className="w-px h-10 bg-gradient-to-b from-[#0ed90e]/30 to-transparent mx-auto mb-16" />

        {/* Feature cards with step counters */}
        <div className="grid md:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div
              key={idx}
              className={`reveal reveal-delay-${idx + 1} relative p-10 rounded-[2.5rem] glass border border-white/5 hover:border-[#0ed90e]/30 transition-all duration-500 group text-center flex flex-col items-center hover:-translate-y-3 overflow-hidden`}
            >
              {/* Ghost step number */}
              <span className="absolute top-6 right-8 text-8xl font-black text-white/[0.03] select-none pointer-events-none leading-none">
                {String(idx + 1).padStart(2, '0')}
              </span>

              {/* Icon with gradient container */}
              <div className="w-20 h-20 rounded-[1.5rem] bg-gradient-to-br from-[#0ed90e]/20 via-[#0ed90e]/10 to-transparent border border-[#0ed90e]/25 flex items-center justify-center text-[#0ed90e] mb-7 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_15px_30px_-8px_rgba(14,217,14,0.2)]">
                {item.icon}
              </div>

              {/* Step pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0ed90e]/10 border border-[#0ed90e]/20 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ed90e]" />
                <span className="text-[9px] font-black text-[#0ed90e] uppercase tracking-[0.2em]">Paso {idx + 1}</span>
              </div>

              <h3 className="text-2xl font-black mb-4 text-white uppercase italic tracking-tight">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
