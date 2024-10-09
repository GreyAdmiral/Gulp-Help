module.exports = {
   root: true,
   env: { browser: true, es2020: true, node: true },
   extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
   ignorePatterns: ['dist', '.eslintrc.cjs'],
   parser: '@typescript-eslint/parser',
   plugins: ['react', 'react-hooks', 'react-refresh', '@typescript-eslint', 'prettier'],
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },
   rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'max-lines-per-function': 'off',
   },
   overrides: [
      {
         files: ['*.tsx'],
         rules: {
            'max-lines-per-function': ['off'],
         },
      },
   ],
};
