/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}",
    "./public/**/*.html",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Colores de tu marca
        red: "#FF1E1E",
        dark: "#2F3A4A",
        lightgray: "#D9DCE1",
        lightbg: "#FFFFFF",
        darkbg: "#111111",
      },
      fontFamily: {
        title: ["Caprasimo", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
