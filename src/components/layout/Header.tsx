import Link from "next/link";
import NextImage from "next/image";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#111821]/80 backdrop-blur-md border-b border-[#0ed90e]/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <NextImage 
              src={logo} 
              alt="Pare Ahí Logo" 
              width={180} 
              height={60} 
              className="h-20 w-auto object-contain"
              priority
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <Link className="text-sm font-semibold text-white hover:text-[#0ed90e] transition-colors" href="#features">Características</Link>
            <Link className="text-sm font-semibold text-white hover:text-[#0ed90e] transition-colors" href="#pricing">Precios</Link>
            <Link className="text-sm font-semibold text-white hover:text-[#0ed90e] transition-colors" href="#security">Seguridad</Link>
          </nav>
          <div className="flex items-center gap-4">
            <a 
              href="#cta"
              className="bg-[#0ed90e] hover:bg-[#0ed90e]/90 text-[#111821] px-5 py-2 rounded-lg font-bold text-sm transition-all shadow-lg shadow-[#0ed90e]/20"
            >
              Unirse a la lista
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
