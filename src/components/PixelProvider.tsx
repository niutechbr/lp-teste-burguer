"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function PixelProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Definição do ID
    const savedId = localStorage.getItem("custom_pixel_id");
    const pixelId = savedId || process.env.NEXT_PUBLIC_META_PIXEL_ID;

    if (!pixelId || pixelId === "undefined" || pixelId === "null") return;

    // 2. Inicialização segura do Pixel
    const fb = (window as any);
    if (!fb.fbq) {
      fb.fbq = function() {
        fb.fbq.callMethod ? fb.fbq.callMethod.apply(fb.fbq, arguments) : fb.fbq.queue.push(arguments);
      };
      if (!fb._fbq) fb._fbq = fb.fbq;
      fb.fbq.push = fb.fbq;
      fb.fbq.loaded = !0;
      fb.fbq.version = '2.0';
      fb.fbq.queue = [];
      const t = document.createElement('script');
      t.async = !0;
      t.src = 'https://connect.facebook.net/en_US/fbevents.js';
      const s = document.getElementsByTagName('script')[0];
      s.parentNode?.insertBefore(t, s);

      fb.fbq('init', pixelId);
    }

    // 3. Track PageView
    fb.fbq('track', 'PageView');
  }, [pathname, searchParams]);

  return null;
}