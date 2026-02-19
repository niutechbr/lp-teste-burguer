"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Settings, Save, ArrowLeft, Trash2 } from "lucide-react";

export default function DebugPage() {
  const [inputPixel, setInputPixel] = useState("");
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    setCurrentId(localStorage.getItem("custom_pixel_id") || process.env.NEXT_PUBLIC_META_PIXEL_ID || "Não definido");
  }, []);

  const save = () => {
    localStorage.setItem("custom_pixel_id", inputPixel);
    window.location.reload();
  };

  const clear = () => {
    localStorage.removeItem("custom_pixel_id");
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-black text-white p-10 flex flex-col items-center">
      <div className="max-w-xl w-full">
        <Link href="/" className="text-gray-500 mb-10 flex items-center gap-2"><ArrowLeft size={16}/> Voltar</Link>
        <h1 className="text-3xl font-black text-orange-500 uppercase mb-8 tracking-tighter italic">Painel de Marketing</h1>
        
        <div className="bg-zinc-900 p-8 rounded-3xl border border-white/5 space-y-6">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Pixel ID Atual</label>
            <p className="text-xl font-mono text-yellow-400 mt-1">{currentId}</p>
          </div>

          <div className="space-y-3">
            <input 
              className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-orange-500"
              placeholder="Digite o novo Pixel ID..."
              value={inputPixel}
              onChange={(e) => setInputPixel(e.target.value)}
            />
            <button onClick={save} className="w-full bg-orange-500 p-4 rounded-xl font-bold flex items-center justify-center gap-2">
              <Save size={18}/> Salvar Pixel
            </button>
          </div>

          <button onClick={clear} className="text-red-500 text-xs uppercase font-bold flex items-center gap-2 pt-4">
            <Trash2 size={14}/> Resetar para Padrão
          </button>
        </div>
      </div>
    </main>
  );
}