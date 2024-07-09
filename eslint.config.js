import eslint from '@eslint/js'
import astro from 'eslint-plugin-astro'
import a11y from 'eslint-plugin-jsx-a11y'
import sort from 'eslint-plugin-simple-import-sort'
import solid from 'eslint-plugin-solid'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  a11y.flatConfigs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...astro.configs.recommended,
  {
    languageOptions: { parserOptions: { project: true, tsconfigRootDir: import.meta.dirname } },
    linterOptions: { reportUnusedDisableDirectives: 'off' },
    plugins: { 'simple-import-sort': sort },
    rules: {
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        { groups: [['^\\u0000'], ['^node:'], ['^(react|solid|vite|astro)', '^@?\\w'], ['^'], ['^\\.']] },
      ],
    },
  },
  { files: ['src/**/*.{ts,tsx}'], extends: [solid.configs['flat/recommended']] },
  { files: ['!src/**/*.{ts,tsx}'], extends: [tseslint.configs.disableTypeChecked] },
  { ignores: ['**/*.d.ts'] },
)
