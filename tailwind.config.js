const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['index.html', 'src/**/*.{md,mdx,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        default: '#19253d',
        primary: '#2a6cea',
        neutral: '#f6f9ff',
        surface: '#fcfcfc',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      minHeight: {
        xs: '20rem',
        sm: '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
