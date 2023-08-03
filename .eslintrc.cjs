module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-typescript', 'airbnb/hooks', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
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
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  ignorePatterns: ["**/*.css"],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
    createDefaultProgram: true
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    "import/prefer-default-export": 'off',
    'import/no-extraneous-dependencies': 'off',
    "no-param-reassign": 0,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    'react/require-default-props': 'off',
    'react/function-component-definition': 'off'
  },
};
