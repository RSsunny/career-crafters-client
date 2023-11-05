/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");
 
module.exports = withMT({
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
});
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily:{
//         playfair:['Playfair Display', 'serif'],
//         edu:['Edu TAS Beginner', 'cursive']
//       }
//     },
//   },
//   plugins: [require("daisyui")],
// }

