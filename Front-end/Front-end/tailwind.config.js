/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Esto indica que Tailwind se aplicará a todos los archivos .js, .jsx, .ts y .tsx
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#000405',
        'blue-main': '#067DC7',
      },
      backgroundImage: {
       'bg-dark': 'radial-gradient(ellipse 80% 100% at 50% -20%, rgba(8,91,195,0.35), rgba(12,31,52,0))',    },
    },
  },
  plugins: [],
};
