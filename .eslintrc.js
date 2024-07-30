// .eslintrc.mjs
module.exports = {
  root: true,
  extends: [ 'plugin:@wordpress/eslint-plugin/recommended-with-formatting' ],
  parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: [ '@wordpress/babel-preset-default' ],
		},
	},
  rules: {},
};
