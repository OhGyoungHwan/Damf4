/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      ko: ['"Noto Sans KR"', "sans-serif"],
      "number-en": ["Roboto", "sans-serif"],
    },
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      secondary: {
        base: "#778544",
        dark: "#606B37",
        light: "#BBD16B",
      },
      primary: {
        base: "#6C9C48",
        dark: "#405C2A",
        light: "#A1E86B",
      },
      accent: { base: "#96489C", dark: "#582A5C", light: "#E06BE8" },
    },
  },
  plugins: [],
};
