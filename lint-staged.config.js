export default {
  '*.{ts,tsx}': () => 'tsc -p tsconfig.json',
  '*.{astro,js,jsx,ts,tsx}': 'eslint --fix --cache --cache-location node_modules/.cache/eslint',
  '*.{astro,css,html,json,md,mdx,js,jsx,ts,tsx}': 'prettier --write --cache',
}
