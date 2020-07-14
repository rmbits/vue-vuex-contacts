module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'

  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'padded-blocks': 'off',
    'space-before-function-paren': 'off',
    'spaced-comment': 'off',
    'no-multiple-empty-lines': 'off',
    'no-unused-vars': 'off',
    //'eqeqeq': 'off',
  }
}
