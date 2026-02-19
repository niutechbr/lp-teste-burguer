"use client";

import { useState } from "react";
import { PRODUCTS } from "@/constants/products";
import { ShoppingCart, X, Plus, Minus, Trash2, Loader2 } from "lucide-react";

export default function Menu() {
  const [cart, setCart] = useState<any[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const addToCart = (product: any) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Erro no servidor: " + data.error);
        setIsLoading(false);
      }
    } catch (error) {
      alert("Erro de conexão ao processar pagamento.");
      setIsLoading(false);
    }
  };

  // Funções simples para o carrinho
  const updateQty = (id: number, delta: number) => {
    setCart(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="border p-6 rounded-3xl shadow-sm">
            <img src={product.image} alt={product.name} className="h-48 w-full object-cover rounded-2xl mb-4" />
            <h3 className="font-bold text-xl">{product.name}</h3>
            <p className="text-2xl font-black text-orange-500 mt-2">R$ {product.price.toFixed(2)}</p>
            <button 
              onClick={() => addToCart(product)}
              className="w-full mt-4 bg-yellow-400 p-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} /> Adicionar
            </button>
          </div>
        ))}
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl p-6 transform transition-transform ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold uppercase">Meu Carrinho</h2>
          <button onClick={() => setIsCartOpen(false)}><X /></button>
        </div>

        <div className="flex-grow space-y-4 overflow-y-auto max-h-[60vh]">
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b pb-4">
              <div>
                <p className="font-bold">{item.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <button onClick={() => updateQty(item.id, -1)}><Minus size={14}/></button>
                  <span className="font-bold">{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, 1)}><Plus size={14}/></button>
                </div>
              </div>
              <p className="font-bold">R$ {(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <div className="flex justify-between text-2xl font-black mb-6">
              <span>Total:</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button 
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-orange-500 text-white py-5 rounded-2xl font-bold text-lg flex justify-center items-center gap-3 disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : "Pagar Agora"}
            </button>
          </div>
        )}
      </aside>
    </section>
  );
}