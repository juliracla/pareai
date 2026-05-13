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
               ¡Muy pronto añadiremos nuevas funcionalidades  innovadoras a solicitud de nuestros usuarios!
            </h2>
            <p className="text-xl text-[#111821]/80 max-w-2xl mb-12 font-bold tracking-tight">
            
            </p>
            
      

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
