// .eslintrc.mjs
module.exports = {
	root: true,
	extends: [
		'plugin:@wordpress/eslint-plugin/recommended-with-formatting',
		'plugin:storybook/recommended',
		'plugin:@typescript-eslint/recommended',
	],
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
			alias: {
				map: [
					['@/icons', './src/ui/icons.js'],
					['@/components', './src/components'],
					['@/utilities', './src/utilities'],
					['@', './src'],
				],
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: ['@wordpress/babel-preset-default'],
		},
	},
	overrides: [
		{
			files: ['./src/utilities/withTW.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
	rules: {
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/no-noninteractive-element-interactions': 'off',
		'jsx-a11y/anchor-is-valid': 'off',
		// '@typescript-eslint/no-explicit-any': 'off',
		 
		'no-mixed-spaces-and-tabs': 'off',
	},
	globals: {
		localStorage: 'readonly',
	},
};
