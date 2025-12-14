/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      backgroundImage: {
        "hero-background": "url('assets/img/Bread-Hero.jpg')",
      },
    },
  },
  plugins: [],
};
