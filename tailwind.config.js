const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,

      app: {
        dark: '#383838',
        lightBlue: "#E8F4FE",
        primary: "#445DC9",
        darkGray: '#565E78',
        grayMeduim: '#969EB5',
        gray800: '#565E78',
        gray50: '#F6F7FA',
        blue100: '#445DC9',
        blue200: '#2944B7',
        blue300: '#2D3B77',
        blue400: '#1D2D6F'
      }
    },
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '3rem',
      '5xl': '5rem',
      '6xl': '10rem',
      full: '9999px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
