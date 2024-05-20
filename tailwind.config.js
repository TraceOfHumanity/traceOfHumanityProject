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
        mainBg: "var(--mainBg)",
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
      boxShadow: {
        popupShadow:
          "0px 0px 20px 0px #000, inset 5px 5px 20px 5px var(--opacityRed01)",
        blueShadow:
          "0px 0px 20px 0px #000, inset 5px 5px 20px 5px var(--opacityBlue01)",
        buttonGlare: "inset 0px 0px 10px 0px var(--opacityWhite)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        headerCenter: "url('/public/assets/headerCenter.svg')",
      },
      keyframes: {
        spin: {
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(-360deg)"},
        },
        spinReverse: {
          "0%": {transform: "rotate(0deg)"},
          "100%": {transform: "rotate(360deg)"},
        },
      },
      animation: {
        spin: "spin 1.5s linear infinite",
        spinReverse: "spinReverse 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
