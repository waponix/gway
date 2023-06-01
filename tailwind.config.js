/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Blinker'],
        'mono': ['Palanquin'],
        'serif': ['Sarabun'],
      },
      backgroundImage: {
        'crosshatch-pattern': "url('/img/crosshatch.png')"
      }
    },
  },
  plugins: [],
}

