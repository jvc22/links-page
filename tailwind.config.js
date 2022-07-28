/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        wave3: 'url(/src/assets/wave3.svg)',
        bluewave: 'url(/src/assets/bluewave.svg)',
        blackwave: 'url(/src/assets/blackwave.svg)',
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        opensans: 'Open Sans, sans-serif',
        nunito: 'Nunito',
        bebas: 'Bebas Neue, cursive',
        mont: 'Montserrat',
        hsummit: 'High Summit, sans-serif',
        azonix: 'Azonix, sans-serif'
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}
