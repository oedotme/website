const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['index.html', 'src/**/*.{md,mdx,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        default: 'var(--default)',
        primary: 'var(--primary)',
        neutral: 'var(--neutral)',
        surface: 'var(--surface)',
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
