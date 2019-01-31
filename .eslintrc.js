module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    node: true,
    es6: true,
    mocha: true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'mocha'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'mocha/no-exclusive-tests': 'error',
  },
};
