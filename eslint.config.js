// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    ignores: [
      "**/node_modules",
      "**/package-lock.json",
      "**/documentation",
      "**/e2e",
      "src/setupJest.ts",
      "src/jestGlobalMocks.ts",
      "src/environments",
      "jest.config.ts",
      "setup-jest.ts",
    ],
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.app.json", "./tsconfig.spec.json"],
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: ["app", ""],
          style: "kebab-case",
        },
      ],
      "@typescript-eslint/prefer-readonly": "error",
      "no-param-reassign": ["error", { props: true }],
      "@typescript-eslint/no-non-null-assertion": "error",
      "prefer-const": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "no-console": "warn",
      "@angular-eslint/no-empty-lifecycle-method": "error",
      "sort-imports": [
        "error",
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: true,
        },
      ],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      "@angular-eslint/template/alt-text": "error",
      "@angular-eslint/template/elements-content": "error",
      "@angular-eslint/template/label-has-associated-control": "error",
      "@angular-eslint/template/table-scope": "error",
      "@angular-eslint/template/valid-aria": "error",
      "@angular-eslint/template/click-events-have-key-events": "error",
      "@angular-eslint/template/mouse-events-have-key-events": "error",
      "@angular-eslint/template/no-autofocus": "error",
      "@angular-eslint/template/no-distracting-elements": "error",
      "@angular-eslint/template/no-positive-tabindex": "error",
      "@angular-eslint/template/role-has-required-aria": "error",
    },
  },
);
