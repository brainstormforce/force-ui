export default {
	extends: [
		'@wordpress/stylelint-config',
	],
	rules: {
		'font-family-name-quotes': 'always-where-recommended',
		'function-url-quotes': 'always',
		'declaration-property-unit-allowed-list': {
			'/^line-height/': ['em', 'rem', 'px'],
		},
		'comment-empty-line-before': null,
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'no-descending-specificity': null,
		'no-duplicate-selectors': null,
		'at-rule-no-unknown': null,
		'at-rule-empty-line-before': null,
		'at-rule-empty-line-before': [
			'always',
			{
				except: ['blockless-after-same-name-blockless', 'first-nested'],
				ignore: ['after-comment'],
			},
		],
		"block-no-empty": true,
		"no-empty-source": true,
		'declaration-empty-line-before': [
			'always',
			{
				except: ['after-declaration', 'first-nested'],
				ignore: ['after-comment', 'inside-single-line-block'],
			},
		],
		'rule-empty-line-before': [
			'always-multi-line',
			{
				except: ['first-nested'],
				ignore: ['after-comment'],
			},
		],
	},
	overrides: [
		{
			files: ['*.scss', '**/*.scss'],
			extends: '@wordpress/stylelint-config/scss-stylistic',
		},
		{
			files: ['*.css', '**/*.css'],
			extends: '@wordpress/stylelint-config/stylistic',
		},
	],
	customSyntax: 'postcss-scss',
};
