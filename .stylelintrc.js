// stylelint configuration
// https://stylelint.io/user-guide/configuration/
module.exports = {

  // The standard config based on a handful of CSS style guides
  // https://github.com/stylelint/stylelint-config-standard
  extends: 'stylelint-config-standard',

  rules: {
    'property-no-unknown': [true, {
      ignoreProperties: [
        // CSS Modules composition
        // https://github.com/css-modules/css-modules#composition
        'composes'
      ]
    }],

    'selector-pseudo-class-no-unknown': [true, {
      ignorePseudoClasses: [
        // CSS Modules :global scope
        // https://github.com/css-modules/css-modules#exceptions
        'global'
      ]
    }],

    // Opinionated rule, you can disable it if you want
    'string-quotes': 'single',
  },
};
