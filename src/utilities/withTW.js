import deepmerge from 'deepmerge';
import libraryConfig from '../theme/default-config';

/**
 * Deep-merges the Force UI theme into a consumer Tailwind config.
 *
 * @deprecated since 2.0.0. Force UI is now CSS-first for Tailwind v4. Instead of
 * merging a JS config, import the shipped tokens in your CSS entry with
 * `"tailwindcss"` followed by `"@bsf/force-ui/theme.css"`. This helper is
 * retained only for consumers still on Tailwind v4's legacy JS-config path
 * (loaded via the CSS `@config` directive) and will be removed in 3.0.0.
 *
 * @since x.x.x
 * @param {Object} tailwindConfig Consumer Tailwind config object.
 * @return {Object} Config merged with the Force UI theme.
 */
const withTW = ( tailwindConfig ) => {
	return deepmerge( libraryConfig, { ...tailwindConfig } );
};

export default withTW;
