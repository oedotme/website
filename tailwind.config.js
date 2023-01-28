const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{astro,md,mdx,js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        default: 'var(--default)',
        primary: 'var(--primary)',
        neutral: 'var(--neutral)',
        surface: 'var(--surface)',
        elevate: 'var(--elevate)',
        element: 'var(--element)',
        comment: 'var(--comment)',
      },
      fontFamily: {
        sans: ['IBM Plex Sans', ...fontFamily.sans],
      },
      minHeight: {
        xs: '20rem',
        sm: '40rem',
        md: '48rem',
        lg: '64rem',
      },
    },
  },
  plugins: [],
}
