"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PixelProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Pega o ID (Prioridade: LocalStorage > ENV)
    const savedId = localStorage.getItem("custom_pixel_id");
    const pixelId = savedId || process.env.NEXT_PUBLIC_META_PIXEL_ID;

    if (!pixelId || pixelId === "undefined") return;

    // 2. Inicializa o Facebook Pixel se ainda não existir
    if (!(window as any).fbq) {
      (function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js'));

      (window as any).fbq('init', pixelId);
    }

    // 3. Rastreia PageView toda vez que a rota mudar
    (window as any).fbq('track', 'PageView');

  }, [pathname, searchParams]);

  return null; // Este componente não renderiza nada visualmente
}