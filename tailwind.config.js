const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      primary: "#151515",
      primaryDark: "#000000",
      primaryLight: "#3b3b3b",
      primaryLightest: "#999999",
      secondary: "#dcff50",
      secondaryLight: "#ffff84",
      secondaryDark: "#a7cc09",
    },
  },
  plugins: [],
};
