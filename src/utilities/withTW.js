import deepmerge from 'deepmerge';
import libraryConfig from '../theme/default-config';

const withTW = ( tailwindConfig ) => {
	return deepmerge( libraryConfig, { ...tailwindConfig } );
};

export default withTW;