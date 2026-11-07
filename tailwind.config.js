/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#101827",
        electric: "#3B82F6",
        cyan: "#06B6D4",
        paper: "#F8FAFC"
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Manrope", "sans-serif"]
      }
    }
  },
  plugins: []
};
