/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        main: "#eeb55a",
        "custom-yellow": "#EFB55B",
      },
    },
  },
  plugins: [],
};
