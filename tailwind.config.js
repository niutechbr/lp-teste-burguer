/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#F59E0B",
          yellow: "#FBBF24",
          dark: "#121212",
          white: "#FDFDFD"
        },
      },
    },
  },
  plugins: [],
};