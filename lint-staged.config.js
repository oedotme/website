module.exports = {
  'src/**/*.{ts,tsx}': [() => 'tsc -p tsconfig.json', 'eslint -c eslint.config.js --fix'],
  '*.{js,jsx}': 'eslint -c eslint.config.js --fix',
  '*.{css,html,json,md,mdx}': 'prettier -w',
}
