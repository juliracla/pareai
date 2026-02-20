import { Camera, Activity, ShoppingCart } from "lucide-react";

export default function Features() {
  const list = [
    {
      icon: <Camera className="text-3xl" />,
      color: "primary",
      title: "Captura Inteligente con IA",
      description: "Usa la cámara para escanear etiquetas de precios al instante con Inteligencia Artificial IA de alta precisión diseñada para supermercados."
    },
    {
      icon: <Activity className="text-3xl" />,
      color: "warning",
      title: "INDICADORES VISUALES EN TIEMPO REAL",
      description: "Indicadores visuales en tiempo real: Verde (dentro de presupuesto),  y Rojo (límite alcanzado)."
    },
    {
      icon: <ShoppingCart className="text-3xl" />,
      color: "danger",
      title: "Gestión de lista de mercado",
      description: "Administra tus productos escaneados, ajusta las cantidades   automáticamente antes de llegar a la registradora."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight text-slate-900 dark:text-white uppercase italic">
            Tu presupuesto bajo control en 3 pasos
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Nuestra tecnología te ayuda a mercar de forma inteligente <b>SIN CALCULADORAS</b> manuales ni sorpresas al pagar.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div 
              key={idx} 
              className={`reveal reveal-delay-${idx + 1} p-8 rounded-3xl border border-slate-100 dark:border-slate-800 bg-[#f6f7f8]/50 dark:bg-[#111821]/50 hover:border-[#0ed90e]/50 transition-all group text-left`}
            >
              <div className={`w-14 h-14 bg-[#0ed90e]/10 rounded-2xl flex items-center justify-center text-[#0ed90e] mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white uppercase italic">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
