/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        black: "#04060f",
        blue: "#47aaff",
      },
      maxWidth: {
        max: "1440px",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      boxShadow: {
        blogShadow: "0px 48px 90px rgba(0, 0, 0, 0.48)",
      },
      backgroundImage: {
        hero: " radial-gradient(51.57% 51.57% at 73.36% 48.43%, #4A4A4E 0%, #04060F 100%)",
      },
    },
  },
  plugins: [],
};
