import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer"; // Importe o novo componente

export default function Home() {
  return (
    <main className="bg-brand-white min-h-screen">
      <Hero />
      <Menu />
      <Footer /> {/* Adicione aqui */}
    </main>
  );
}