const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['index.html', 'src/**/*.{md,mdx,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        default: '#111111',
        primary: '#055ad4',
        surface: '#fdfdfd',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      minHeight: {
        sm: '40rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
