const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');

const libConfig = {
	...defaultConfig,
	entry: {
		'force-ui': path.resolve(process.cwd(), 'src/index'),
		'utils/withTW': path.resolve(process.cwd(), 'src/utilities/withTW.js'),
	},
	output: {
		path: path.resolve(process.cwd(), 'dist'),
		filename: '[name].js',
		library: {
			name: '[name].[file].js',
			type: 'umd',
		},
		globalObject: `typeof self !== 'undefined' ? self : this`,
	},
	resolve: {
		...defaultConfig.resolve,
		extensions: ['.ts', '.tsx', '.js', '.jsx', '...'],
		alias: {
			...defaultConfig.resolve.alias,
			'@': path.resolve(process.cwd(), 'src'),
			'@/components': path.resolve(process.cwd(), 'src/components'),
			'@/utilities': path.resolve(process.cwd(), 'src/utilities'),
			'@/globals': path.resolve(process.cwd(), 'src/globals'),
		},
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.mjs$/,
				include: /node_modules/,
				type: 'javascript/auto',
			},
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.json',
							transpileOnly: true,
						},
					},
				],
			},
		],
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
};

module.exports = libConfig;
