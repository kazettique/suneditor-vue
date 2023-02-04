/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier',
    'plugin:typescript-sort-keys/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier', 'simple-import-sort', 'sort-keys'],
  root: true,
  rules: {
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-var-requires': 'warn',
    'arrow-body-style': 'off',
    'import/order': 'off',
    'no-unused-vars': 'warn',
    'prefer-arrow-callback': 'off',
    'prettier/prettier': 'error',
    semi: 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': ['off'], // disable default eslint sort-keys
    'sort-keys/sort-keys-fix': ['error', 'asc', { caseSensitive: true, minKeys: 2, natural: true }], // use sort-keys-fix for fixing
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'warn',
    'vue/order-in-components': 'off',
    'vue/v-bind-style': ['error', 'longform'],
    'vue/v-on-style': ['error', 'longform'],
  },
};
