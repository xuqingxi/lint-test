module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  parserOptions: {
    // Parser that checks the content of the <script> tag
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    "vue/setup-compiler-macros": true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
  ],
  settings: {},
  rules: {
    "prettier/prettier": 1,
    // Vue: Recommended rules to be closed or modify
    "vue/require-default-prop": 0,
    "vue/singleline-html-element-content-newline": 0,
    "vue/max-attributes-per-line": 0,
    // Vue: Add extra rules
    "vue/custom-event-name-casing": [2, "camelCase"],
    "vue/no-v-text": 1,
    "vue/padding-line-between-blocks": 1,
    "vue/require-direct-export": 1,
    "vue/multi-word-component-names": 0,
    // Allow @ts-ignore comment
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-empty-function": 1,
    "@typescript-eslint/no-explicit-any": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-param-reassign": 0,
    "prefer-regex-literals": 0,
  },
};
