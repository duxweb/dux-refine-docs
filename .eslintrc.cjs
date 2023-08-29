module.exports = {
  env: { browser: true, es2020: true, node: true },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:mdx/recommended',
    'prettier',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
  },
  overrides: [
    {
      files: ['*.mdx'],
      extends: 'plugin:mdx/recommended',
    },
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        printWidth: 100,
        jsxSingleQuote: true,
        endOfLine: 'auto',
        indent: 2,
        tabWidth: 2,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'no-undef': 'off',
    'no-unused-vars': 'off',
  },
}
