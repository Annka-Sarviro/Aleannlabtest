/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bodyColor: '#E6E9F2',
        cardBodyColor: '#FFF',
        blue100: '338415D',
        blue80: '#3A4562',
        blue50: '#384564',
        blue30: '#878D9D',
        lightblue100: '#5876C5',
        lightblue80: '#55699E',
        lightblue50: '#A1B1DB',
        yellow100: '#988B49',
        yellow50: '#FFFAE2',
      },

      boxShadow: {
        cardShadow:
          '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
      },

      borderColor: {
        blue: '55699E',
        yellow: 'FFCF00',
      },
      borderRadius: {
        rad8: '8px',
        rad50: '50%',
      },

      fontFamily: {
        proxi: ['Proxima Nova', 'sans-serif'],
        robot: ['Roboto', 'sans-serif'],
      },

      padding: {},
    },
  },
  plugins: [],
};
