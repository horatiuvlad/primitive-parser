module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          object: false,
        },
        extendDefaults: true,
      },
    ],
  },
  plugins: ['@typescript-eslint', 'prettier'],
}
