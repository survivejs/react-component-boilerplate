module.exports = {
  "globals": {
    "NAME": true,
    "VERSION": true,
    "USER": true,
  },
  "rules": {
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
  },
};
