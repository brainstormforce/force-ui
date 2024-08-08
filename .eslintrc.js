// .eslintrc.mjs
module.exports = {
  root: true,
  extends: ["plugin:@wordpress/eslint-plugin/recommended-with-formatting"],
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: ["@wordpress/babel-preset-default"],
    },
  },
  rules: {
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/exhaustive-deps": "off",
    "jsx-a11y/label-has-associated-control": "off",
  },
};
