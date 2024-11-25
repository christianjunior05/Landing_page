/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html" , "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/img/1.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}