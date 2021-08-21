'use strict';

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:unicorn/recommended"
  ],
  rules: {
    "capitalized-comments": "off",
    "indent": [
      "error",
      2,
      {
        "MemberExpression": "off",
        "SwitchCase": 1
      }
    ],
    "max-params": [
      "warn",
      5
    ],
    "multiline-ternary": [
      "error",
      "always-multiline"
    ],
    "new-cap": "off",
    "no-console": "off",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-named-capture-group": "off",
    "semi": [
      "error",
      "always"
    ],
    "import/no-unresolved": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/explicit-length-check": "off",
    "unicorn/filename-case": "off",
    "unicorn/import-index": "off",
    "unicorn/import-style": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-for-loop": "off",
    "unicorn/no-null": "off",
    "unicorn/no-unused-properties": "error",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prefer-dataset": "off",
    "unicorn/prefer-module": "off",
    "unicorn/prefer-node-append": "off",
    "unicorn/prefer-node-remove": "off",
    "unicorn/prefer-optional-catch-binding": "off",
    "unicorn/prefer-query-selector": "off",
    "unicorn/prevent-abbreviations": "off"
  }
};
