import { PRODUCTS } from "@/constants/products";
import { ShoppingCart } from "lucide-react";

export default function Menu() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-brand-dark uppercase tracking-tighter">
            Explore Nosso <span className="text-brand-orange">Cardápio</span>
          </h2>
          <div className="h-1 w-20 bg-brand-yellow mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
              <div className="h-48 w-full overflow-hidden"> {/* Isso limita a altura da imagem */}
  <img 
    src={item.image} 
    alt={item.name} 
    className="w-full h-full object-cover" 
  />
</div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{item.name}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-brand-orange">
                    R$ {item.price.toFixed(2).replace('.', ',')}
                  </span>
                  <button className="bg-brand-yellow hover:bg-brand-orange p-3 rounded-xl transition-colors">
                    <ShoppingCart size={24} className="text-brand-dark" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}