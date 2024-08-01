const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

const libConfig = {
	...defaultConfig,
	entry: path.resolve(process.cwd(), "src/index.js"),
	output: {
		path: path.resolve(process.cwd(), "dist"),
		filename: "force-ui.js",
		library: {
            name: 'forceUI',
            type: 'umd',
        },
	},
	resolve: {
		...defaultConfig.resolve,
		extensions: [".js", ".jsx"],
	},
	externals: {
		react: "React",
		"react-dom": "ReactDOM",
	},
};

module.exports = libConfig;
