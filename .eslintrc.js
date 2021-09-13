module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2018,
    allowImportExportEverywhere: true,
  },
  plugins: [
    'react',
  ],
  rules: {
    'arrow-parens': 1,
    'object-curly-newline': ['error', { multiline: true }],
    'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    'react/jsx-props-no-spreading': 'off',
    'max-len': [2, 2000, 4, { ignoreUrls: true }],
  },
};
