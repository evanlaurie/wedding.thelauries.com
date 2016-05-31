module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    'arrow-body-style': ['error', 'always'],
  },
  env: {
    mocha: true
  },
  ecmaFeatures: {
    experimentalObjectRestSpread: true
  }
};