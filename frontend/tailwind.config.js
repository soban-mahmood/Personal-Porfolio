/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { min: "90px", max: "600px" },
      md: { min: "600px", max: "900px" },
      lg: { min: "900px", max: "1270px" },
      xl: { min: "1270px", max: "2200px" },
    },
  },
  plugins: [],
}

