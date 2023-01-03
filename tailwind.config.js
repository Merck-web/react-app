/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray_white': '#E1E1E1',
        'mainPink': '#D2334D'
      },
      boxShadow: {
        'navShadow': '0px 10px 20px rgba(0, 0, 0, 0.05)'
      }
    },
  },
  plugins: [],
}