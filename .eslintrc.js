module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "prettier", "eslint-config-prettier"],
  plugins: ["prettier"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'no-useless-escape': 'off',
    'func-names': 'off',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'off',
    'no-param-reassign': 'off'
  },
};
