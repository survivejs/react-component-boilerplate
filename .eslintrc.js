module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jasmine": true,
    "node": true,
  },
  "plugins": [
    "react",
  ],
  "rules": {
    // Allow js files to use jsx syntax, too
    'react/jsx-filename-extension': 'off',
  },
};
