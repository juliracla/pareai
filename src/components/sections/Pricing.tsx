"use client";
import { CheckCircle2, Stars, Zap } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "PACK BÁSICO",
      price: "$5.000",
      description: "Ideal para tus primeras compras",
      icon: <Zap className="w-6 h-6 text-[#0ed90e]" />,
      features: [
        { name: "150 créditos de escaneo con IA", available: true },
        { name: "Alertas de presupuesto real", available: true },
        { name: "Historial de compras local", available: true }
      ],
      popular: true
    },
    {
      name: "PACK AHORRO",
      price: "$20.000",
      description: "El más popular para familias",
      icon: <Stars className="w-6 h-6 text-[#0ed90e]" />,
      features: [
        { name: "500 créditos de escaneo con IA", available: true },
        { name: "Comparación de precios IA", available: true },
        { name: "Listas de mercado compartidas", available: true },
        { name: "Soporte prioritario 24/7", available: true }
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-[#111821] overflow-hidden relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight text-white uppercase italic leading-tight">
            Escoge tu paquete <br />de créditos
          </h2>
          <p className="text-xl text-slate-400 font-bold max-w-2xl mx-auto">
            Recarga créditos según tus necesidades. Sin suscripciones mensuales, <span className="text-[#0ed90e]">paga solo por lo que usas</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch pt-10 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col bg-slate-900/50 backdrop-blur-xl p-8 rounded-[2.5rem] border-2 transition-all duration-500 relative text-left group
                ${plan.popular 
                  ? 'border-[#0ed90e] shadow-[0_0_50px_-12px_rgba(14,217,14,0.3)] lg:scale-105 z-10' 
                  : 'border-slate-800 hover:border-slate-700 shadow-sm'
                }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0ed90e] text-[#111821] text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-[#0ed90e]/20">
                  Recomendado
                </div>
              )}

              <div className="mb-8 p-3 bg-slate-800/50 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {plan.icon}
              </div>

              <h3 className="text-2xl font-black mb-1 text-white uppercase italic tracking-tight">{plan.name}</h3>
              <p className="text-slate-400 font-bold text-sm mb-6">{plan.description}</p>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-500 font-black text-sm uppercase tracking-widest">cop</span>
                </div>
              </div>



              <ul className="space-y-4 flex-grow">
                 {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                    <CheckCircle2 className="text-[#0ed90e] w-5 h-5 shrink-0" />
                    {feature.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


