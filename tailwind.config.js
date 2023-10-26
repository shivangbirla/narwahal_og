/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { min: "1200px" },
      lg: { min: "991px" },
      md: { min: "767px" },
      sm: { min: "550px" },
      xsm: { min: "400px" },
    },
  },
  plugins: [],
};