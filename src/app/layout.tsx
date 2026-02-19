import "./globals.css";
import { Suspense } from "react";
import PixelProvider from "@/components/PixelProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <Suspense fallback={null}>
          <PixelProvider />
        </Suspense>
        {children}
      </body>
    </html>
  );
}