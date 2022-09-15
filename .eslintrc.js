module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    "import/resolver": {
      "babel-module": {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  ignorePatterns: ["node_modules/*", ".out/*", "!.prettierrc.js"],
  extends: ["eslint:recommended", "plugin:storybook/recommended"],
  plugins: ["prettier", "react", "@typescript-eslint"],
  overrides: [{
    files: ["**/*.ts", "**/*.tsx"],
    parser: "@typescript-eslint/parser",
    settings: {
      react: {
        version: "detect"
      }
    },
    env: {
      browser: true,
      node: true,
      es6: true
    },
    extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", // TypeScript rules
    "plugin:react/recommended", // React rules
    "plugin:react-hooks/recommended" // React hooks rules
    ],
    rules: {
      "react/prop-types": "off",
      "import/extensions": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "import/no-cycle": [0, {
        ignoreExternal: true
      }],
      // I suggest this setting for requiring return types on functions only where useful
      "@typescript-eslint/explicit-function-return-type": ["warn", {
        allowExpressions: true,
        allowConciseArrowFunctionExpressionsStartingWithVoid: true
      }],
      "prettier/prettier": ["error", {}, {
        usePrettierrc: true
      }],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error", {
        functions: false,
        classes: false,
        variables: true
      }]
    }
  }]
};