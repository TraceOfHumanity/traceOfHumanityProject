/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        bodyBg: "var(--bodyBg)",
        textColor: "var(--textColor)",
        opacityBlue: "var(--opacityBlue)",
        opacityRed: "var(--opacityRed)",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
