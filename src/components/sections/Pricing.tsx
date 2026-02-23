"use client";
import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(1); // Default to "Ahorro" (index 1)

  const plans = [
    {
      name: "PACK BÁSICO",
      price: "$5.000",
      description: "Ideal para compras ocasionales",
      features: [
        { name: "80 créditos de escaneo con IA", available: true },
        { name: "Alerta de  presupuesto", available: true },
        { name: "Lista de mercado", available: true }
      ],
      cta: "Seleccionar paquete",
      popular: false
    },
    {
      name: "PACK AHORRO",
      price: "$9.900",
      description: "El más popular para familias",
      features: [
        { name: "200 créditos de escaneo con IA", available: true },
        { name: "Listas inteligentes", available: true },
        { name: "Alertas de precios", available: true }
      ],
      cta: "Seleccionar paquete",
      popular: true
    },
    {
      name: "PACK PRO",
      price: "$19.900",
      description: "Para los que no quieren límites",
      features: [
        { name: "500 créditos de escaneo con IA", available: true },
        { name: "Listas inteligentes", available: true },
        { name: "Alertas de precios", available: true },
        { name: "Soporte prioritario", available: true }
      ],
      cta: "Seleccionar paquete",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-[#111821] overflow-hidden relative" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-black mb-6 tracking-tight text-white uppercase italic">
            Escoge tu paquete de créditos
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            Recarga créditos según tus necesidades. Sin suscripciones mensuales, paga solo por lo que usas.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-end">
          {plans.map((plan, idx) => {
            const isSelected = selectedPlan === idx;
            return (
              <div 
                key={idx} 
                onClick={() => setSelectedPlan(idx)}
                className={`reveal reveal-delay-${idx + 1} cursor-pointer bg-slate-900 p-8 rounded-3xl border-2 transition-all duration-500 relative text-left 
                   ${isSelected 
                    ? 'border-[#0ed90e] shadow-[0_0_40px_-10px_rgba(14,217,14,0.4)] scale-105 z-10' 
                    : 'border-slate-800 shadow-sm hover:border-[#0ed90e]/50'
                  }`}
              >
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 text-[#111821] text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest transition-colors duration-500 ${isSelected ? 'bg-[#0ed90e]' : 'bg-slate-700'}`}>
                    Más popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1 text-white uppercase italic">{plan.name}</h3>
                <p className="text-xs text-slate-500 mb-6 font-semibold uppercase">{plan.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  <span className="text-slate-400 font-bold text-sm">COP</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                   {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className={`flex items-center gap-3 text-sm font-semibold ${feature.available ? 'text-white' : 'text-slate-500'}`}>
                      {feature.available ? (
                        <CheckCircle2 className="text-[#0ed90e] w-5 h-5 shrink-0" />
                      ) : (
                        <XCircle className="text-slate-600 w-5 h-5 shrink-0" />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <button 
                  className={`w-full py-4 rounded-xl font-black transition-all duration-500 ${isSelected ? 'bg-[#0ed90e] text-[#111821] shadow-lg shadow-[#0ed90e]/30' : 'bg-slate-800 text-slate-500'}`}
                >
                  {isSelected ? 'Cargar créditos ahora' : plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
