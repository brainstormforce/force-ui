// Import the default config file and expose it in the project root.
// Useful for editor integrations.

import config from '@wordpress/prettier-config';

config.overrides = [
	{
		files: ['*.scss', '*.css'],
		options: {
			printWidth: 500,
			singleQuote: false,
		},
	},
];

export default config;
