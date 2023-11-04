/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair:['Playfair Display', 'serif'],
        edu:['Edu TAS Beginner', 'cursive']
      }
    },
  },
  plugins: [require("daisyui")],
}

