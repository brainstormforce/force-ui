const deepmerge = require( 'deepmerge' );

const libraryConfig = require( '../theme/default-config' );

const withTW = ( tailwindConfig ) => {
	return deepmerge( libraryConfig, { ...tailwindConfig } );
};

module.exports = withTW;
