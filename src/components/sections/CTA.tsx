export default function CTA() {
  return (
    <section className="py-24 font-sans" id="cta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0ed90e] rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-[#0ed90e]/20">
          <div className="absolute inset-0 bg-white/5 opacity-50 blur-3xl"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl lg:text-6xl font-black text-[#111821] mb-8 tracking-tight uppercase italic leading-none">
              ¿Listo para transformar tu forma de mercar?
            </h2>
            <p className="text-xl text-[#111821]/80 max-w-2xl mb-12 font-bold tracking-tight">
              ¡Sé de los primeros en probar la revolución del ahorro! Únete a nuestra lista de espera exclusiva hoy y asegura créditos GRATIS para tus primeras compras.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input 
                className="flex-grow py-4 px-6 rounded-2xl border-none focus:ring-2 focus:ring-[#111821] bg-white shadow-xl outline-none text-slate-900 font-semibold" 
                placeholder="Ingresa tu correo" 
                type="email"
              />
              <button className="bg-[#111821] text-[#0ed90e] font-black py-4 px-8 rounded-2xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest active:scale-95 whitespace-nowrap">
                QUIERO MIS CRÉDITOS GRATIS
              </button>
            </div>
            <p className="mt-8 text-[10px] font-black text-[#111821]/60 uppercase tracking-[0.3em]">Sin compromisos • Lanzamiento 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
