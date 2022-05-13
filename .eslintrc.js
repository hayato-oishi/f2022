module.exports = {
  env: {
    es2021: true
  },
  extends: [
    'standard',
    'prettier'
  ],
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-n',
    'eslint-plugin-promise'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  }
}