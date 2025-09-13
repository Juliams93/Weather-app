/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // azul vivo
        secondary: '#fbbf24', // amarillo
        accent: '#f472b6', // rosa
        info: '#38bdf8', // celeste
        success: '#22d3ee', // turquesa
        warning: '#f59e42', // naranja
        danger: '#ef4444', // rojo
      },
      backgroundImage: {
        'sunny': 'linear-gradient(135deg, #fbbf24 0%, #f472b6 100%)',
        'cloudy': 'linear-gradient(135deg, #a1a1aa 0%, #38bdf8 100%)',
        'rainy': 'linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)',
        'night': 'linear-gradient(135deg, #0f172a 0%, #2563eb 100%)',
      },
    },
  },
  plugins: [],
}
