module.exports = {
  'src/**/*.{ts,tsx}': [() => 'tsc -p tsconfig.json', 'eslint --config eslint.config.js --fix'],
  '*.{js,jsx}': 'eslint --config eslint.config.js --fix',
  '*.{css,html,json,md,mdx}': 'prettier --write',
}
