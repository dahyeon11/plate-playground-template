import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

const eslintConfig = [
  {
    ignores: ['dist', 'node_modules', '.vite'],
  },
  ...tseslint.configs.recommended,
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'import/no-anonymous-default-export': 'off',
      'linebreak-style': ['error', 'unix'],
      'no-case-declarations': 'off',
      'no-duplicate-imports': 'off',
      'no-empty-function': 'off',
      'no-prototype-builtins': 'off',
      'no-unused-vars': 'off',
      'react/display-name': 'off',
      'react/jsx-curly-brace-presence': [
        'warn',
        { children: 'never', props: 'never' },
      ],
      'react/jsx-newline': ['off'],
      'react/no-unescaped-entities': ['error', { forbid: ['>'] }],
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'spaced-comment': [
        'error',
        'always',
        {
          block: {
            balanced: true,
            exceptions: ['*'],
            markers: ['!'],
          },
          line: {
            exceptions: ['-', '+'],
            markers: ['/'],
          },
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': 'off',
    },
  },
];

export default eslintConfig;
