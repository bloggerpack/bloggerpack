'use strict';

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-rational-order'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-empty-line-before': null,
    'at-rule-name-space-after': 'always',
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-space-before': 'never',
    'block-closing-brace-empty-line-before': null,
    'block-closing-brace-newline-after': null,
    'block-opening-brace-space-before': null,
    'color-named': 'never',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-empty-line-before': null,
    'declaration-no-important': null,
    'font-family-name-quotes': 'always-where-recommended',
    'font-weight-notation': [
      'numeric',
      {
        'ignore': [
          'relative'
        ]
      }
    ],
    'function-url-no-scheme-relative': true,
    'function-url-quotes': 'always',
    'max-empty-lines': 2,
    'max-line-length': null,
    'media-feature-name-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': null,
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never-single-line',
    'selector-max-attribute': null,
    'selector-max-class': null,
    'selector-max-combinators': null,
    'selector-max-compound-selectors': null,
    'selector-max-id': null,
    'selector-max-specificity': null,
    'selector-max-type': null,
    'selector-max-universal': null,
    'selector-no-qualifying-type': false,
    'selector-no-vendor-prefix': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'double',
    'value-list-comma-newline-after': 'never-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always',
    'value-no-vendor-prefix': true,
    'scss/at-function-named-arguments': 'never',
    'scss/at-function-pattern': '^[a-z][a-z-]*$',
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-mixin-named-arguments': null,
    'scss/at-mixin-parentheses-space-before': 'never',
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'at-least-one-space',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-no-missing-interpolation': true,
    'scss/dollar-variable-pattern': '^[a-z][a-z-\\d]*$',
    'scss/media-feature-value-dollar-variable': null,
    'scss/no-duplicate-dollar-variables': [
      null,
      {
        'ignoreInsideAtRules': [
          'if',
          'mixin'
        ]
      }
    ],
    'scss/no-duplicate-mixins': true,
    'scss/operator-no-newline-after': true,
    'scss/operator-no-newline-before': true,
    'scss/operator-no-unspaced': true
  }
};
