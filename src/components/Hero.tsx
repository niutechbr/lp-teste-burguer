export default function Hero() {
  return (
    <section className="bg-brand-dark text-white py-20 px-6 text-center border-b-4 border-brand-orange">
      <div className="max-w-4xl mx-auto">
        <span className="bg-brand-orange text-brand-dark px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest">
          Artesanal & Suculento
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 mt-6 leading-tight">
          O Verdadeiro <span className="text-brand-yellow">Sabor do Fogo</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Hambúrgueres feitos com blend especial de carnes nobres e pão brioche selado na manteiga.
        </p>
        <button className="bg-brand-orange hover:bg-brand-yellow text-brand-dark font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl shadow-brand-orange/20">
          QUERO MEU BURGER AGORA
        </button>
      </div>
    </section>
  );
}