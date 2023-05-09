/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.html',
    './**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      spacing: {
        '35': '10rem',
        '105': '26rem',
        '124': '36rem'
      },
      colors: {
        'own': '#2ed573',
      }
    },
  },
  plugins: [],
}

