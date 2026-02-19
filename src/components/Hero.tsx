// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-brand-dark text-white py-20 px-6 text-center border-b-4 border-brand-orange">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          O Verdadeiro <span className="text-brand-yellow">Sabor do Fogo</span>
        </h1>
        <p className="text-gray-300 mb-10">
          Hambúrgueres feitos com blend especial de carnes nobres.
        </p>
      </div>
    </section>
  );
}