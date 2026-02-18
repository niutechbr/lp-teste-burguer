import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    /* Utilizamos min-h-screen para garantir que o site ocupe a tela toda
      e bg-brand-white para o fundo limpo que destaca o laranja/amarelo.
    */
    <main className="min-h-screen bg-brand-white">
      
      {/* 1. Topo de Impacto (Headline e Chamada) */}
      <Hero />
      
      {/* 2. Seção de Produtos (Cardápio Digital) */}
      <Menu />
      
      {/* 3. Rodapé (Informações de contato e Copyright) */}
      <Footer />
      
    </main>
  );
}