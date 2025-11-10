/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fastnas-red': '#c80000',
        'fastnas-white': '#eeebdd',
      },
      fontFamily: {
        'agrandir': ['Agrandir', 'sans-serif'],
        'horizon': ['Horizon', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
