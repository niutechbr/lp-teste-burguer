import Link from "next/link";
import { Settings } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-gray-800 py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-brand-yellow font-black text-xl uppercase italic">
            Burger <span className="text-brand-orange">Fire</span>
          </h3>
          <p className="text-gray-600 text-xs mt-1 italic">
            Plataforma de Vendas Automática
          </p>
        </div>

        <Link 
          href="/debug" 
          className="flex items-center gap-2 text-gray-700 hover:text-brand-orange transition-all text-[8px] font-mono uppercase tracking-widest border border-gray-800 px-4 py-2 rounded-full"
        >
          <Settings size={14} />
          Configurar Pixel
        </Link>
      </div>
    </footer>
  );
}