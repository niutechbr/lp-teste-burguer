import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F59E0B", // Laranja Artesanal
          yellow: "#FBBF24", // Amarelo Apetite
          dark: "#121212",   // Fundo Escuro Moderno
          white: "#FDFDFD"
        },
      },
    },
  },
  plugins: [],
};
export default config;