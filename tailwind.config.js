const kebabcase = require('lodash.kebabcase');
const tokens = require('./tokens/tokens');

const colors = Object.fromEntries(Object
  .values(tokens.color)
  .map(({ attributes, value }) => [
    kebabcase(attributes.type), value
  ]));

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
