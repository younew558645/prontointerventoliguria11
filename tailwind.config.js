/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Assicurati che Tailwind analizzi tutti i file del progetto
  ],
  theme: {
    extend: {
      colors: {
        primary: '#078f09', // Verde principale
        'primary-dark': '#056c07', // Verde scuro per hover
        light: '#f8f6f4', // Beige chiaro per sfondo
        dark: '#393c40', // Grigio scuro per testo
        'gray-light': '#c8c4c1', // Grigio chiaro per bordi
      },
    },
  },
  plugins: [],
};