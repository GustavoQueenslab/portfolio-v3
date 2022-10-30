/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#2A2D34",
        tertiary: "#2574A9",
        dhr: "#3F4759",
        redare: "#1F2937",
      },
    },
  },
  plugins: [],
};