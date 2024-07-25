const path = require('path');

module.exports = {
  mode: 'production', // Set to 'development' or 'production' as needed
  entry: {
    components: './src/components.js', // Entry point for components
    settings: './src/settings.js', // Entry point for settings
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js', // Output file name based on entry point name (e.g., components.js, settings.js)
    library: {
      name: 'bsfAdminUI', // Replace with your library name
      type: 'umd', // Universal Module Definition export
      export: 'default', // Export default from entry module
    },
    clean: true, // Clean the 'dist' directory before each build
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript/JSX
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Babel presets for environment and React
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these extensions when importing modules
    alias: {
      // Example aliases for easier imports (adjust based on your project structure)
      '@components': path.resolve(__dirname, 'src/components'),
      '@settings': path.resolve(__dirname, 'src/settings'),
      '@utility': path.resolve(__dirname, 'src/utility'),
    },
  },
};
