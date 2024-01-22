module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', 
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
        jest: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
        '*.config.js',
        '*.cjs',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jest',
  ],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
