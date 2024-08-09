const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

const libConfig = {
	...defaultConfig,
	entry: path.resolve(process.cwd(), "src/index.js"),
	output: {
		path: path.resolve(process.cwd(), "dist"),
		filename: "force-ui.js",
		library: {
			name: "forceUI",
			type: "umd",
		},
	},
	resolve: {
		...defaultConfig.resolve,
		extensions: [".js", ".jsx", "..."],
		alias: {
			...defaultConfig.resolve.alias,
			"@": path.resolve(process.cwd(), "src"),
			"@/components": path.resolve(process.cwd(), "src/components"),
			"@/utilities": path.resolve(process.cwd(), "src/utilities"),
		},
	},
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
              },
		],
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
};

module.exports = libConfig;
