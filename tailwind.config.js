/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '420px',
        tablet: '640px',
        desctop: '1400px',
      },
      colors: {
        cardBodyColor: '#E6E9F2',
        cardBodyColor: '#FFF',
        blue: {
          90: '#38415D',
          80: '#3A4562',
          50: '#384564',
          30: '#878D9D',
        },
        lightblue: {
          100: '#5876C5',
          80: '#55699E',
          50: '#DFE7FC',
        },

        yellow: {
          100: '#988B49',
          50: '#FFFAE2',
          30: 'FFCF00',
        },
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
