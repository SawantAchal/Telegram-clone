/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      screens: {
        'md': '768px',
      },
      keyframes:{
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation:{
        rotate: 'rotate 0.5s ease-in-out',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

