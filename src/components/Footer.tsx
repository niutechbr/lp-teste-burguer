export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-black text-brand-orange italic">BURGER<span className="text-brand-yellow">APP</span></h3>
          <p className="text-gray-400 mt-2">Qualidade artesanal na sua mesa.</p>
        </div>

        <div className="flex flex-col gap-3 text-center md:text-right">
          <p className="text-brand-yellow font-semibold uppercase tracking-wider text-sm text-center">Fale Conosco</p>
          <a href="tel:34999999999" className="text-xl font-bold hover:text-brand-orange transition">
            34 99999-9999
          </a>
          <a href="mailto:teste@gmail.com" className="text-gray-400 hover:text-brand-yellow transition">
            teste@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs text-gray-500 uppercase tracking-widest">
        © 2026 Burger Artesanal - Feito com LPs
      </div>
    </footer>
  );
}