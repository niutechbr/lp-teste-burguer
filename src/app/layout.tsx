import "./globals.css"; // ESTA LINHA É OBRIGATÓRIA
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Burger Artesanal",
  description: "O melhor hambúrguer da região",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}