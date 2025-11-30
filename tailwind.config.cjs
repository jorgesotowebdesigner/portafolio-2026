/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: "#FF1E1E",
        dark: "#2F3A4A",
        lightgray: "#D9DCE1",
        white: "#FFFFFF",
        black: "#111111",
      },
      fontFamily: {
        title: ["Caprasimo", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
