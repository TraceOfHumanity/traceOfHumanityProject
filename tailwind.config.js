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
        grayText: "var(--grayText)",
        red: "var(--red)",
        blue: "var(--blue)",
        opacityBlue: "var(--opacityBlue)",
        opacityRed: "var(--opacityRed)",
        opacityBlue01: "var(--opacityBlue01)",
        opacityRed01: "var(--opacityRed01)",
        white: "var(--white)",
        opacityWhite: "var(--opacityWhite)",
      },
      boxShadow: {
        // popupShadow:
        //   "inset 15px 15px 50px 0px var(--opacityRed01),inset -15px -15px 20px 1px var(--opacityBlue01)",
        popupShadow:
          " 0px 0px 20px 0px #000, inset 5px 5px 20px 0px var(--opacityRed01)",
      },
    },
  },
  plugins: [],
};
