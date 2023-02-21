/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(0.6)' },
          '100%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        scale: 'scale 1s ease-in-out',
      }
    },
  },
  plugins: [],
};
