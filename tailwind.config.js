/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.075)' },
        },
      },
      animation: {
        scale: 'scale 0.25s ease-in-out',
      }
    },
  },
  plugins: [],
};
