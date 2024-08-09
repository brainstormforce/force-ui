const deepmerge = require("deepmerge");

const libraryConfig = require('../../tailwind.config.js')

const withTW = (tailwindConfig) => {
	return deepmerge(libraryConfig, {...tailwindConfig});
};

module.exports = withTW;
