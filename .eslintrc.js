/**
 * @file .eslintrc
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  extends: [
    'archetype/configurations/browser',
    'archetype/rules/plugin-react',
    'archetype/rules/plugin-jsdoc',
  ],
  settings: {
    react: {
      version: '16.13',
    },
  },
};
