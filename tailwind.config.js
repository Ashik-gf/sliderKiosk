
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

import { keepTheme } from "keep-react/keepTheme";

module.exports = keepTheme({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Custom theme configurations here
    extend: {
      colors: {
        myCustomColor: '#3182ce',
      },
    },
  },
  plugins: [],
});