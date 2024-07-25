import merge from 'deepmerge';

export default function withForceUI( tailwindConfig ) {
  let configObject;
  if ( typeof tailwindConfig === 'string' ) {
    configObject = import( tailwindConfig );
  }
  const forceUIConfig = {
    content: [ './src/**/*.{js,jsx}' ],
    theme: {
      extend: {},
    },
    plugins: [],
    corePlugins: {
      preflight: false,
    },
  };

  return merge(
    forceUIConfig,
    typeof tailwindConfig === 'string' ? configObject : tailwindConfig
  );
}
