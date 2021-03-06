module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es2020: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  rules: {},
};
