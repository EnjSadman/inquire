module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:react/recommended',
  ],
  rules: {
    // React
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    'react/display-name': 0,
    'no-param-reassign': 0,

    // JavaScript
    semi: 0,
    'no-proto': 0,
    'no-unused-vars': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-console': 1,

    // TypeScript
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/': 0,
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
};
