import NextImage from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 py-16 border-t border-slate-200 dark:border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12 text-left">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <NextImage 
                src={logo} 
                alt="Pare Ahí Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-semibold">
              La primera aplicación colombiana enfocada en el ahorro real durante las compras de supermercado mediante inteligencia artificial.
            </p>
          </div>
          <div>
            <h4 className="font-black mb-6 dark:text-white text-slate-900 uppercase italic tracking-wider">Producto</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 dark:text-slate-400">
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#features">Características</Link></li>
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#pricing">Precios</Link></li>
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#">Tecnología de Visión IA</Link></li>

            </ul>
          </div>
          <div>
            <h4 className="font-black mb-6 dark:text-white text-slate-900 uppercase italic tracking-wider">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500 dark:text-slate-400">
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#">Privacidad</Link></li>
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#">Términos</Link></li>
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#">Cookies</Link></li>
              <li><Link className="hover:text-[#0ed90e] transition-colors" href="#">Contacto</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <p>© 2026 PareAi! - Hecho en Colombia 🇨🇴</p>
          <div className="flex gap-6">
            <Link className="hover:text-[#0ed90e] transition-colors" href="#">Tiktok</Link>
            <Link className="hover:text-[#0ed90e] transition-colors" href="#">Instagram</Link>
            <Link className="hover:text-[#0ed90e] transition-colors" href="#">Gmail</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
