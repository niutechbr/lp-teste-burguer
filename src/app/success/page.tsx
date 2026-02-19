import Link from "next/link";
import Script from "next/script";
import { CheckCircle2, ShoppingBag } from "lucide-react";

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      {/* Script para disparar evento de Compra (Purchase) */}
      <Script id="fb-purchase" strategy="afterInteractive">
        {`
          if (typeof window.fbq !== 'undefined') {
            fbq('track', 'Purchase', { currency: 'BRL', value: 0.00 }); // O valor pode ser dinâmico via URL params se desejar
          }
        `}
      </Script>

      <div className="max-w-md w-full text-center border p-10 rounded-3xl shadow-xl">
        <div className="flex justify-center mb-6">
          <CheckCircle2 size={64} className="text-green-500" />
        </div>
        <h1 className="text-3xl font-black mb-4 uppercase">Pedido Confirmado!</h1>
        <p className="text-gray-500 mb-8">
          Seu pagamento foi aprovado e o pedido já está sendo preparado.
        </p>
        <Link 
          href="/"
          className="bg-black text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-500 transition-colors"
        >
          <ShoppingBag size={20} />
          Voltar para o Início
        </Link>
      </div>
    </main>
  );
}