import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import ts from '@vue/eslint-config-typescript'

export default [
  js.configs.recommended,
  ...vue.configs['flat/essential'],
  ...ts(),
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        process: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      // Vue-specific rules
      'vue/multi-word-component-names': 'off',
      'vue/no-unused-vars': 'error',

      // TypeScript rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',

      // General JavaScript rules
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
    }
  },
  {
    // Ignore patterns (replaces .eslintignore)
    ignores: [
      'dist/**',
      'node_modules/**',
      '.nuxt/**',
      '.next/**',
      '.vite/**',
      'coverage/**',
      '*.d.ts'
    ]
  }
]