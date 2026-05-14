import Link from "next/link";
import NextImage from "next/image";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full py-3">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#111821]/85 backdrop-blur-xl border-b border-white/8" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">

          <div className="flex items-center">
            <NextImage
              src={logo}
              alt="Pare Ahí Logo"
              width={160}
              height={50}
              className="h-14 w-auto object-contain hover:scale-105 transition-transform"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-xs font-black text-white/60 hover:text-[#0ed90e] transition-all uppercase tracking-[0.2em]" href="#features">Características</Link>
            <Link className="text-xs font-black text-white/60 hover:text-[#0ed90e] transition-all uppercase tracking-[0.2em]" href="#download">Descargar</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a 
              href="#download"
              className="bg-[#0ed90e] hover:bg-[#0ed90e]/90 text-[#111821] px-6 py-2.5 rounded-full font-black text-xs transition-all shadow-[0_10px_20px_-5px_rgba(14,217,14,0.3)] uppercase tracking-widest active:scale-95"
            >
              Descargar App
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
