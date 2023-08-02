/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/tw-elements/dist/js/**/*.js"
],
  theme: {
    extend: {
      fontFamily: {
        Handjet: [ 'Handjet'],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}