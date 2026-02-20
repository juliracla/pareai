import { ShieldCheck, EyeOff, FileCheck, CloudIcon, Lock } from "lucide-react";

export default function Security() {
  const items = [
    {
      icon: <ShieldCheck className="text-4xl text-[#0ed90e]" />,
      title: "Cifrado de punta",
      desc: "Tus datos financieros viajan seguros con SSL de 256 bits."
    },
    {
      icon: <EyeOff className="text-4xl text-[#0ed90e]" />,
      title: "Privacidad Total",
      desc: "No vendemos tu información a terceros ni marcas."
    },
    {
      icon: <FileCheck className="text-4xl text-[#0ed90e]" />,
      title: "Ley de Datos",
      desc: "Cumplimos con la Ley 1581 de Protección de Datos Personales."
    },
    {
      icon: <CloudIcon className="text-4xl text-[#0ed90e]" />,
      title: "Sync Seguro",
      desc: "Respaldo automático en la nube sin comprometer tu anonimato."
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950" id="security">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`reveal reveal-delay-${idx + 1} bg-[#f6f7f8] dark:bg-slate-900 p-6 rounded-2xl flex flex-col items-center text-center border border-transparent hover:border-[#0ed90e]/20 transition-all shadow-sm`}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-bold mb-1 dark:text-white uppercase italic">{item.title}</h4>
                  <p className="text-xs text-[#64748B] font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col gap-6 text-left">
            <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight dark:text-white uppercase italic text-slate-900">
              Tu seguridad es nuestra prioridad número uno
            </h2>
            <p className="text-lg text-[#64748B] dark:text-slate-400 leading-relaxed font-semibold">
              Entendemos que la privacidad de tus finanzas es fundamental. Por eso, Pare Ahí! está diseñado con estándares bancarios de seguridad y un compromiso inquebrantable con la protección de tus datos.
            </p>
            <div className="flex flex-col gap-4">
              {/* Sección Anónimo removida */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
