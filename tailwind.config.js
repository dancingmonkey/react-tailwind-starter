const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#0F0E0E',
        primaryDark: '#090909',
        primaryLight: '#999999',
        secondary: "#dcff50",
        secondaryLight: "#ffff84",
        secondaryDark: "#a7cc09",
      },
    },
  },
  plugins: [],
};
