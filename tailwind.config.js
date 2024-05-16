/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: '10px',
    },
    extend: {
      colors: {
        mainBg: 'var(--mainBg)',
        textColor: "var(--textColor)",
        grayText: "var(--grayText)",
        red: "var(--red)",
        blue: "var(--blue)",
        opacityBlue: "var(--opacityBlue)",
        opacityRed: "var(--opacityRed)",
        opacityBlue01: "var(--opacityBlue01)",
        opacityRed01: "var(--opacityRed01)",
        white: "var(--white)",
        opacityWhite: "var(--opacityWhite)",
        buttonBg: "var(--buttonBg)",
        borderColor: "var(--borderColor)",
      },
    },
  },
  plugins: [],
};
