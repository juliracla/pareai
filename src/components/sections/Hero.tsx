"use client";
import { useState } from "react";
import { Mail, CheckCircle2, Loader2 } from "lucide-react";
import NextImage from "next/image";
import mainImage from "../../assets/main.png";
import { supabase } from "@/lib/supabase";
import SuccessModal from "@/components/ui/SuccessModal";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("¡BIENVENIDO!");
  const [modalType, setModalType] = useState<"success" | "error">("success");

  const handleJoin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Por favor ingresa un correo válido");
      return;
    }

    setStatus("loading");
    try {
      // 1. Consultar si el correo ya existe (GET/SELECT)
      const { data: existingEntries, error: fetchError } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email);

      if (fetchError) throw fetchError;

      if (existingEntries && existingEntries.length > 0) {
        setStatus("idle");
        setModalTitle("YA ESTÁS REGISTRADO");
        setModalType("error");
        setMessage("Este correo ya está en nuestra lista. ¡Te avisaremos pronto!");
        setIsModalOpen(true);
        setEmail("");
        return;
      }

      // 2. Si no existe, proceder con el registro (INSERT)
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (insertError) throw insertError;

      setStatus("success");
      setModalTitle("¡BIENVENIDO!");
      setModalType("success");
      setMessage("¡Registro exitoso! Te avisaremos muy pronto cuando la app esté lista.");
      setIsModalOpen(true);
      setEmail("");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setMessage(err.message || "Error al unirse");
    }
  };

  return (
    <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(14,217,14,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(17,24,33,1),rgba(15,23,42,1))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8 z-10 text-left">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0ed90e]/10 text-[#0ed90e] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0ed90e]/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ed90e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ed90e]"></span>
                </span>
                MUY PRONTO LANZAMIENTO
              </span>
              <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] tracking-tight text-white mb-6 uppercase italic">
                Tu mercado <span className="text-[#0ed90e]">bajo control</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
                Controla tu presupuesto en tiempo real mientras mercas. Gracias a nuestra <span className="text-white font-bold">Tecnología de Visión IA</span>, escanea precios al instante y evita sorpresas al pagar.
              </p>
            </div>
            
       

          </div>
          
          <div className="relative flex justify-center lg:justify-end animate-float">
            {/* Resplandor ambiental suave */}
            <div className="absolute inset-x-0 -inset-y-5 bg-[#0ed90e]/20 blur-[100px] rounded-full"></div>
            
            {/* Marco Premium Redondeado con Borde Doble */}
            <div className="relative w-full max-w-[500px]">
              <div className="relative rounded-[48px] p-2 bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden">
                <NextImage 
                  src={mainImage} 
                  alt="Pare Ahí App Showcase" 
                  className="w-full h-auto object-contain rounded-[40px]"
                  priority
                />
                
                {/* Segundo borde interno para el efecto de profundidad */}
                <div className="absolute inset-0 rounded-[48px] ring-1 ring-inset ring-white/20 pointer-events-none"></div>
              </div>

              {/* Orbes decorativos estáticos */}
              <div className="absolute top-0 -right-4 w-12 h-12 bg-[#0ed90e]/30 blur-2xl rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 left-0 w-16 h-16 bg-[#0ed90e]/20 blur-3xl rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle}
        message={message}
        type={modalType}
      />
    </section>
  );
}
