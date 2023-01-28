module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': [
      'warn',
      { groups: [['^\\u0000'], ['^(node:)'], ['^(react|solid|vite|astro)', '^@?\\w'], ['^(@)(/.*|$)'], ['^\\.']] },
    ],
  },
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser', extraFileExtensions: ['.astro'] },
      extends: ['plugin:astro/recommended', 'plugin:astro/jsx-a11y-recommended'],
    },
    {
      files: ['**/*.astro/*.js', '*.astro/*.js'],
      env: { browser: true, es2020: true },
      parserOptions: { sourceType: 'module' },
      rules: { 'prettier/prettier': 'off' },
    },
    {
      files: ['*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['solid'],
      extends: ['plugin:solid/typescript', 'plugin:jsx-a11y/recommended'],
    },
  ],
  ignorePatterns: ['*rc.js', '*.config.js', '*.d.ts'],
}
