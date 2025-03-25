/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontfamily:{
        quicksand: ["Quicksand", "sans-serif"],
        }
      },
    },
    plugins: [],
  }