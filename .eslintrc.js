module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'google'],
  rules: {
    'linebreak-style': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    'no-trailing-spaces': 'off',
  },
};
