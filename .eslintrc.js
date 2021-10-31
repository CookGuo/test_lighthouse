module.exports = {
  parser: '@typescript-eslint/parser',
  // extends: ['plugin:@typescript-eslint/recommended'],
  // plugins: ['@typescript-eslint'],
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    semi: ['error', 'never'],
  },
}
