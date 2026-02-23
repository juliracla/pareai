"use client";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import SuccessModal from "@/components/ui/SuccessModal";

export default function CTA() {
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
            
            <form onSubmit={handleJoin} className="flex flex-col gap-4 w-full max-w-lg items-center">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input 
                  className="flex-grow py-4 px-6 rounded-2xl border-none focus:ring-2 focus:ring-[#111821] bg-white shadow-xl outline-none text-slate-900 font-semibold" 
                  placeholder="Ingresa tu correo" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                />
                <button 
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="bg-[#111821] text-[#0ed90e] font-black py-4 px-6 sm:px-8 rounded-2xl hover:scale-105 transition-all shadow-xl uppercase tracking-widest active:scale-95 whitespace-nowrap text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-80"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      ENVIANDO...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      UNIDO
                    </>
                  ) : (
                    "QUIERO MIS CRÉDITOS GRATIS"
                  )}
                </button>
              </div>
              {status === "error" && <p className="text-red-700 text-sm font-bold bg-white/20 px-4 py-1 rounded-full">{message}</p>}
              {status === "success" && <p className="text-[#111821] text-sm font-bold bg-white/40 px-4 py-1 rounded-full">{message}</p>}
            </form>

            <p className="mt-8 text-[10px] font-black text-[#111821]/60 uppercase tracking-[0.3em]">Sin compromisos • Lanzamiento 2026</p>
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
